"use client";

import { memo, useState } from "react";
import { Check, Globe, Mail, Monitor, Rocket, Search } from "lucide-react";

import { SYSTEM_THEME } from "../config";

const theme = SYSTEM_THEME["business-website"];

function GrowthPreview() {
  const [claimed, setClaimed] = useState(false);

  return (
    <div className="relative flex h-full min-h-[400px] overflow-hidden rounded-2xl sm:min-h-[520px]">
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0 z-0" style={{ background: theme.atmosphere }} />

      <div className={`relative z-10 flex flex-1 flex-col overflow-hidden ${theme.contentBg}`}>
        {/* Topbar */}
        <div className={`flex items-center justify-between border-b border-white/[0.06] px-5 py-3 ${theme.topbarBg}`}>
          <div className="flex min-w-0 items-center gap-2">
            <Rocket className={`h-4 w-4 shrink-0 ${theme.accentText}`} strokeWidth={1.8} />
            <span className="truncate text-sm font-semibold text-slate-100">Online Suite</span>
            <span className="hidden text-slate-600 sm:inline">/</span>
            <span className="hidden text-xs text-slate-500 sm:inline">What we deliver</span>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <span className="hidden rounded-full px-2 py-0.5 text-[10px] font-medium text-cyan-400 sm:inline" style={{ background: "rgba(6,182,212,0.12)" }}>
              Websites · Domains · Email
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-3 overflow-auto p-3 sm:gap-4 sm:p-4">

          {/* Website showcase */}
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
            <div className="mb-3 flex items-center gap-2">
              <Monitor className={`h-4 w-4 ${theme.accentText}`} strokeWidth={1.8} />
              <p className="text-xs font-semibold text-slate-200">Built Website</p>
            </div>
            {/* Browser mockup */}
            <div className="overflow-hidden rounded-lg border border-white/[0.08] bg-[#050810]">
              <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-3 py-2">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500/40" />
                <div className="h-2.5 w-2.5 rounded-full bg-amber-500/40" />
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/40" />
                <div className="ml-2 flex flex-1 items-center gap-2 rounded-md bg-white/[0.04] px-2 py-1">
                  <Globe className="h-3 w-3 text-slate-600" />
                  <span className="text-[10px] text-slate-500">yourbusiness.com</span>
                </div>
              </div>
              <div className="space-y-3 p-4">
                <div className="h-4 w-3/5 rounded bg-white/[0.06]" />
                <div className="h-3 w-full rounded bg-white/[0.04]" />
                <div className="h-3 w-4/5 rounded bg-white/[0.04]" />
                <div className="flex gap-2 pt-1">
                  <div className="h-6 w-16 rounded bg-cyan-500/20" />
                  <div className="h-6 w-16 rounded bg-white/[0.06]" />
                </div>
              </div>
            </div>
          </div>

          {/* Domain + Email row */}
          <div className="grid gap-3 sm:grid-cols-2">
            {/* Domain claim */}
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
              <div className="mb-3 flex items-center gap-2">
                <Search className={`h-4 w-4 ${theme.accentText}`} strokeWidth={1.8} />
                <p className="text-xs font-semibold text-slate-200">Domain Claimed</p>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-white/[0.06] bg-[#050810] px-3 py-2.5">
                <Globe className="h-3.5 w-3.5 text-slate-600" />
                <span className="text-xs text-slate-400">yourbusiness.com</span>
                {claimed ? (
                  <span className="ml-auto flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] text-emerald-400">
                    <Check className="h-3 w-3" /> Registered
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={() => setClaimed(true)}
                    className="ml-auto rounded-md bg-cyan-500/15 px-2 py-0.5 text-[10px] text-cyan-400 transition-colors hover:bg-cyan-500/20"
                  >
                    Claim now
                  </button>
                )}
              </div>
            </div>

            {/* Email setup */}
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
              <div className="mb-3 flex items-center gap-2">
                <Mail className={`h-4 w-4 ${theme.accentText}`} strokeWidth={1.8} />
                <p className="text-xs font-semibold text-slate-200">Email Ready</p>
              </div>
              <div className="space-y-1.5">
                {["contact@yourbusiness.com", "sales@yourbusiness.com"].map((email) => (
                  <div key={email} className="flex items-center gap-2 rounded-lg border border-white/[0.06] bg-[#050810] px-3 py-2">
                    <div className={`flex h-5 w-5 items-center justify-center rounded-full ${theme.accentBg}`}>
                      <Mail className={`h-2.5 w-2.5 ${theme.accentText}`} />
                    </div>
                    <span className="text-xs text-slate-400">{email}</span>
                    <span className="ml-auto rounded-full bg-emerald-500/15 px-1.5 py-0.5 text-[9px] text-emerald-400">Active</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Deliverables footer */}
          <div className="mt-auto rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-slate-600">Deliverables</p>
            <div className="flex flex-wrap gap-2">
              {["Custom website", "Domain registration", "SSL certificate", "5 email inboxes", "DNS management"].map((item) => (
                <span key={item} className={`rounded-full border px-2.5 py-1 text-[10px] font-medium ${theme.accentBorder} ${theme.accentText}`} style={{ background: theme.accentMuted }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(GrowthPreview);
