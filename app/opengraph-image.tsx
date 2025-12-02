import { ImageResponse } from 'next/og';

export const alt = 'Magic Resume - Build Your Professional CV in Minutes';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 48,
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '50px',
          padding: '12px 24px',
          fontSize: 18,
          color: 'white',
          marginBottom: '40px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        ✨ AI-Powered CV Enhancement
      </div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          fontSize: 72,
          fontWeight: 'bold',
          color: 'white',
          lineHeight: 1.1,
          marginBottom: '24px',
          maxWidth: '900px',
        }}
      >
        Build Your Professional CV in{' '}
        <span
          style={{
            background: 'linear-gradient(90deg, #fbbf24, #f59e0b)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Minutes
        </span>
      </div>

      <div
        style={{
          fontSize: 24,
          color: 'rgba(255, 255, 255, 0.9)',
          lineHeight: 1.4,
          maxWidth: '700px',
          marginBottom: '40px',
        }}
      >
        Create stunning, professional resumes with our intuitive editor. See
        changes in real-time, polish your content with AI, and export anywhere.
      </div>

      <div
        style={{
          fontSize: 20,
          color: 'rgba(255, 255, 255, 0.7)',
          position: 'absolute',
          bottom: '40px',
          right: '60px',
        }}
      >
        magik-resume.dev
      </div>
    </div>,
    {
      ...size,
    }
  );
}
