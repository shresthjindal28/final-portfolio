import React from 'react';

export interface OGImageOptions {
  title: string;
  subtitle: string;
  category: string;
  tags: string[];
}

export function generateOGImage({ title, subtitle, category, tags }: OGImageOptions) {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#0F1617', // Forest Green
        backgroundImage: 'radial-gradient(circle at 100% 100%, #172a2d 0%, #0F1617 80%)',
        color: '#F8F3E9', // Desert Sand
        padding: '80px',
        justifyContent: 'space-between',
        fontFamily: 'sans-serif',
      }}
    >
      {/* Top row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        {/* Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div
            style={{
              width: '16px',
              height: '16px',
              backgroundColor: '#2A9D8F',
              borderRadius: '4px',
            }}
          />
          <span style={{ fontSize: '24px', fontWeight: 'bold', letterSpacing: '-0.02em' }}>
            Shresth<span style={{ color: '#2A9D8F', fontStyle: 'italic' }}>.</span>Jindal
          </span>
        </div>
        
        {/* Category Badge */}
        <div
          style={{
            display: 'flex',
            padding: '6px 16px',
            borderRadius: '20px',
            border: '1px solid rgba(42, 157, 143, 0.4)',
            backgroundColor: 'rgba(42, 157, 143, 0.1)',
            color: '#2A9D8F',
            fontSize: '14px',
            fontWeight: 'bold',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
          }}
        >
          {category}
        </div>
      </div>

      {/* Middle row: Main info */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
        <div
          style={{
            fontSize: '60px',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            color: '#F8F3E9',
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: '22px',
            color: '#8CA2A6',
            fontWeight: 300,
            lineHeight: 1.4,
            maxWidth: '900px',
          }}
        >
          {subtitle}
        </div>
      </div>

      {/* Bottom row */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          borderTop: '1px solid rgba(233, 227, 213, 0.1)',
          paddingTop: '32px',
        }}
      >
        {/* Tags */}
        <div style={{ display: 'flex', gap: '12px' }}>
          {tags.slice(0, 4).map((tag) => (
            <div
              key={tag}
              style={{
                display: 'flex',
                padding: '6px 12px',
                borderRadius: '8px',
                backgroundColor: 'rgba(233, 227, 213, 0.05)',
                border: '1px solid rgba(233, 227, 213, 0.1)',
                fontSize: '14px',
                color: '#D2E2E4',
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Website URL */}
        <span style={{ fontSize: '18px', color: '#2A9D8F', fontWeight: 'bold' }}>
          shresthjindal.com
        </span>
      </div>
    </div>
  );
}
