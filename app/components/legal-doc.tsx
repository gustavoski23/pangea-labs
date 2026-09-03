'use client';

import { useCallback, useEffect, useState } from 'react';

export type LegalLang = 'en' | 'es';

const KEY = 'pangea:legal-lang';

export const ENTITY = {
  legalName: 'Pangea Labs S.A.S.',
  nit: '901.871.675-6',
  matricula: '21-796624-12',
  camara: 'Cámara de Comercio de Medellín para Antioquia',
  msbRegistered: true,
  msbNumber: '31000333144836',
  registeredOfficeCity: 'Medellín, Antioquia, Colombia',
  registeredOfficeFull: 'Carrera 43 D # 5-113, Medellín, Antioquia, Colombia',
};

export function useLegalLang(): [LegalLang, (l: LegalLang) => void] {
  const [lang, setLangState] = useState<LegalLang>('en');

  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(KEY);
    } catch {}
    if (saved === 'es' || saved === 'en') {
      setLangState(saved);
      document.documentElement.lang = saved;
    } else {
      document.documentElement.lang = 'en';
    }
  }, []);

  const setLang = useCallback((l: LegalLang) => {
    setLangState(l);
    try {
      document.documentElement.lang = l;
      localStorage.setItem(KEY, l);
    } catch {}
  }, []);

  return [lang, setLang];
}

export const S = {
  page: {
    minHeight: '100vh',
    background: 'var(--background, #0a0a0b)',
    color: 'var(--foreground, #fafafa)',
    fontFamily: 'inherit',
    padding: '96px 20px 88px',
  },
  wrap: { maxWidth: 780, margin: '0 auto' },
  h1: {
    color: 'var(--foreground, #fafafa)',
    fontSize: 42,
    lineHeight: 1.08,
    letterSpacing: '-0.035em',
    fontWeight: 600 as const,
    margin: '0 0 10px',
    paddingRight: 88,
  },
  meta: {
    color: 'var(--muted-foreground, #a1a1aa)',
    fontSize: 14,
    lineHeight: 1.6,
    margin: '0 0 30px',
  },
  h2: {
    color: 'var(--foreground, #fafafa)',
    fontSize: 21,
    lineHeight: 1.3,
    letterSpacing: '-0.015em',
    fontWeight: 600 as const,
    margin: '38px 0 10px',
  },
  p: {
    color: 'var(--muted-foreground, #b4b4bc)',
    fontSize: 15,
    lineHeight: 1.78,
    margin: '0 0 14px',
  },
  li: {
    color: 'var(--muted-foreground, #b4b4bc)',
    fontSize: 15,
    lineHeight: 1.75,
    margin: '0 0 10px',
  },
  link: {
    color: 'var(--foreground, #fafafa)',
    textDecoration: 'underline',
    textUnderlineOffset: 3,
  },
  badge: {
    border: '1px solid var(--border, #27272a)',
    background: 'rgba(255,255,255,0.025)',
    borderRadius: 18,
    padding: '20px 22px',
    margin: '0 0 32px',
    boxShadow: '0 20px 70px rgba(0,0,0,0.18)',
  },
  badgeTitle: {
    color: 'var(--foreground, #fafafa)',
    fontSize: 11,
    fontWeight: 700 as const,
    letterSpacing: '0.18em',
    textTransform: 'uppercase' as const,
    margin: '0 0 12px',
  },
  badgeRow: {
    fontSize: 14,
    lineHeight: 1.65,
    margin: '0 0 5px',
    color: 'var(--muted-foreground, #b4b4bc)',
  },
  badgeLabel: { color: 'var(--muted-foreground, #8f8f98)' },
  badgeValue: { color: 'var(--foreground, #fafafa)', fontWeight: 500 as const },
  toggleWrap: {
    position: 'fixed' as const,
    top: 18,
    right: 18,
    zIndex: 50,
    display: 'flex',
    border: '1px solid var(--border, #27272a)',
    borderRadius: 999,
    overflow: 'hidden',
    background: 'rgba(10,10,11,0.78)',
    backdropFilter: 'blur(12px)',
    boxShadow: '0 12px 40px rgba(0,0,0,0.2)',
  },
  toggleBtn: {
    appearance: 'none' as const,
    border: 'none',
    background: 'transparent',
    color: 'var(--muted-foreground, #9ca3af)',
    fontFamily: 'inherit',
    fontSize: 12,
    fontWeight: 600 as const,
    padding: '8px 13px',
    cursor: 'pointer',
  },
  toggleActive: {
    appearance: 'none' as const,
    border: 'none',
    background: 'var(--foreground, #fafafa)',
    color: 'var(--background, #0a0a0b)',
    fontFamily: 'inherit',
    fontSize: 12,
    fontWeight: 700 as const,
    padding: '8px 13px',
    cursor: 'pointer',
  },
} as const;

export function LegalShell({
  lang,
  setLang,
  children,
}: {
  lang: LegalLang;
  setLang: (l: LegalLang) => void;
  children: React.ReactNode;
}) {
  return (
    <div style={S.page}>
      <a
        href="/"
        aria-label={lang === 'en' ? 'Back to Pangea Labs' : 'Volver a Pangea Labs'}
        style={{
          position: 'fixed',
          top: 18,
          left: 18,
          zIndex: 50,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          border: '1px solid var(--border, #27272a)',
          borderRadius: 999,
          padding: '8px 13px',
          background: 'rgba(10,10,11,0.78)',
          backdropFilter: 'blur(12px)',
          color: 'var(--foreground, #fafafa)',
          textDecoration: 'none',
          fontSize: 12,
          fontWeight: 600,
        }}
      >
        <span aria-hidden="true">←</span>
        <span>Pangea Labs</span>
      </a>

      <div style={S.toggleWrap} role="group" aria-label={lang === 'en' ? 'Language' : 'Idioma'}>
        <button type="button" onClick={() => setLang('en')} aria-pressed={lang === 'en'} style={lang === 'en' ? S.toggleActive : S.toggleBtn}>EN</button>
        <button type="button" onClick={() => setLang('es')} aria-pressed={lang === 'es'} style={lang === 'es' ? S.toggleActive : S.toggleBtn}>ES</button>
      </div>
      <main style={S.wrap}>{children}</main>
    </div>
  );
}

export function CredentialBanner({ lang }: { lang: LegalLang }) {
  const t = lang === 'en'
    ? {
        title: 'Regulated & registered',
        entity: 'Legal entity',
        msb: 'FinCEN registration',
        msbValue: 'Registered Money Services Business (MSB)',
        registry: 'Company registry',
        nit: 'Tax ID (NIT)',
        matricula: 'Commercial registration (Matrícula Mercantil)',
        office: 'Registered office',
      }
    : {
        title: 'Regulados y registrados',
        entity: 'Entidad legal',
        msb: 'Registro ante FinCEN',
        msbValue: 'Money Services Business (MSB) registrada',
        registry: 'Registro mercantil',
        nit: 'NIT',
        matricula: 'Matrícula mercantil',
        office: 'Domicilio registrado',
      };

  const msbValue = ENTITY.msbRegistered
    ? t.msbValue + (ENTITY.msbNumber !== '' ? ` · No. ${ENTITY.msbNumber}` : '')
    : '';

  const rows: Array<[string, string]> = [
    [t.entity, ENTITY.legalName],
    [t.msb, msbValue],
    [t.registry, ENTITY.camara],
    [t.nit, ENTITY.nit],
    [t.matricula, ENTITY.matricula],
    [t.office, ENTITY.registeredOfficeCity],
  ];

  return (
    <div style={S.badge}>
      <p style={S.badgeTitle}>{t.title}</p>
      {rows.filter(([, value]) => value !== '').map(([label, value]) => (
        <p key={label} style={S.badgeRow}>
          <span style={S.badgeLabel}>{label}: </span>
          <span style={S.badgeValue}>{value}</span>
        </p>
      ))}
    </div>
  );
}
