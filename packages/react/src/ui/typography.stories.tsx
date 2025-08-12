export default {
  title: 'Design System/Typography',
  parameters: {
    layout: 'centered',
  },
};

export const Fonts = {
  render: () => (
    <div style={{ padding: '20px', maxWidth: '600px' }}>
      <h1 style={{ fontFamily: 'Font_Black', fontSize: '32px', marginBottom: '20px' }}>
        Font Black - 32px
      </h1>
      <h2 style={{ fontFamily: 'Font_Bold', fontSize: '24px', marginBottom: '16px' }}>
        Font Bold - 24px
      </h2>
      <h3 style={{ fontFamily: 'Font_Medium', fontSize: '18px', marginBottom: '12px' }}>
        Font Medium - 18px
      </h3>
      <p style={{ fontFamily: 'Font_Book', fontSize: '16px', marginBottom: '8px' }}>
        Font Book - 16px - Este é um texto de exemplo para demonstrar a fonte Book.
      </p>
      <p style={{ fontFamily: 'Font_Book', fontSize: '14px', marginBottom: '8px' }}>
        Font Book - 14px - Este é um texto menor para demonstrar a fonte Book.
      </p>
      <p style={{ fontFamily: 'Font_Book', fontSize: '12px' }}>
        Font Book - 12px - Este é um texto pequeno para demonstrar a fonte Book.
      </p>
    </div>
  ),
};

export const FontComparison = {
  render: () => (
    <div style={{ padding: '20px', maxWidth: '800px' }}>
      <h2 style={{ fontFamily: 'Font_Bold', fontSize: '24px', marginBottom: '20px' }}>
        Comparação de Fontes
      </h2>
      
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontFamily: 'Font_Black', fontSize: '18px', marginBottom: '8px' }}>
          Font Black (900)
        </h3>
        <p style={{ fontFamily: 'Font_Black', fontSize: '16px' }}>
          The quick brown fox jumps over the lazy dog
        </p>
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontFamily: 'Font_Bold', fontSize: '18px', marginBottom: '8px' }}>
          Font Bold (700)
        </h3>
        <p style={{ fontFamily: 'Font_Bold', fontSize: '16px' }}>
          The quick brown fox jumps over the lazy dog
        </p>
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontFamily: 'Font_Medium', fontSize: '18px', marginBottom: '8px' }}>
          Font Medium (500)
        </h3>
        <p style={{ fontFamily: 'Font_Medium', fontSize: '16px' }}>
          The quick brown fox jumps over the lazy dog
        </p>
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontFamily: 'Font_Book', fontSize: '18px', marginBottom: '8px' }}>
          Font Book (400)
        </h3>
        <p style={{ fontFamily: 'Font_Book', fontSize: '16px' }}>
          The quick brown fox jumps over the lazy dog
        </p>
      </div>
    </div>
  ),
};
