export function LegalFooter() {
  return (
    <div
      style={{
        borderTop: '1px solid var(--border, #27272a)',
        padding: '18px 24px 24px',
        background: 'var(--background, #0a0a0b)',
      }}
    >
      <nav
        aria-label="Legal"
        style={{
          maxWidth: 1152,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 20,
          flexWrap: 'wrap',
        }}
      >
        <a
          href="/terms"
          style={{
            color: 'var(--muted-foreground, #a1a1aa)',
            fontSize: 12,
            textDecoration: 'none',
            transition: 'color 180ms ease',
          }}
        >
          Terms and Conditions
        </a>
        <a
          href="/privacy"
          style={{
            color: 'var(--muted-foreground, #a1a1aa)',
            fontSize: 12,
            textDecoration: 'none',
            transition: 'color 180ms ease',
          }}
        >
          Privacy
        </a>
      </nav>
    </div>
  );
}
