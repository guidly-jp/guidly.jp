"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FORMSPREE_ENDPOINT } from "@/lib/site";
import type { SiteContent } from "@/content/types";

type Props = { t: SiteContent["contact"]["form"]; lang: SiteContent["lang"] };

export default function ContactForm({ t, lang }: Props) {
  const schema = z.object({
    company: z.string().trim().min(1, t.required),
    name: z.string().trim().min(1, t.required),
    email: z.string().trim().min(1, t.required).email(t.invalidEmail),
    message: z.string().trim().min(1, t.required),
    // ハニーポット（Formspree の _gotcha。人間には見えない）
    _gotcha: z.string().max(0).optional(),
  });
  type FormValues = z.infer<typeof schema>;

  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...values, _language: lang, _subject: `[guidly.jp] ${values.company} / ${values.name}` }),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "done") {
    return (
      <div className="flex flex-col gap-2 rounded border border-line bg-white p-6">
        <span className="text-lg font-bold">{t.successTitle}</span>
        <p className="text-sm text-ink-2">{t.successBody}</p>
      </div>
    );
  }

  const input =
    "h-12 w-full rounded border border-line bg-white px-3.5 text-[15px] text-ink placeholder:text-ink-3 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";
  const label = "text-[13px] font-medium text-ink-2";
  const err = "text-xs text-red-600";

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="company" className={label}>
            {t.company}
          </label>
          <input id="company" type="text" placeholder={t.companyPlaceholder} autoComplete="organization" className={input} {...register("company")} />
          {errors.company && <span className={err}>{errors.company.message}</span>}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className={label}>
            {t.name}
          </label>
          <input id="name" type="text" placeholder={t.namePlaceholder} autoComplete="name" className={input} {...register("name")} />
          {errors.name && <span className={err}>{errors.name.message}</span>}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className={label}>
          {t.email}
        </label>
        <input id="email" type="email" placeholder="sample@example.com" autoComplete="email" className={input} {...register("email")} />
        {errors.email && <span className={err}>{errors.email.message}</span>}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className={label}>
          {t.message}
        </label>
        <textarea id="message" rows={5} placeholder={t.messagePlaceholder} className={`${input} h-auto py-3`} {...register("message")} />
        {errors.message && <span className={err}>{errors.message.message}</span>}
      </div>
      <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" {...register("_gotcha")} />

      <p className="text-xs text-ink-3">
        {t.privacyBefore}
        <Link href={t.privacyHref} className="border-b border-ink-3 transition-colors hover:text-accent">
          {t.privacyLabel}
        </Link>
        {t.privacyAfter}
      </p>
      {status === "error" && <p className={err}>{t.error}</p>}
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex h-[52px] items-center justify-center self-start rounded bg-ink px-6 text-[15px] font-medium text-white transition-colors hover:bg-accent disabled:opacity-60"
      >
        {status === "sending" ? t.sending : t.submit}
      </button>
    </form>
  );
}
