import React from "react";
import { Text, TextStyle } from "react-native";

// Definição de tipo para as propriedades de estilo
interface StyleProps {
  size?: number;
  align?: 'left' | 'center' | 'right';
  color?: string;
  mh?: number;  // marginHorizontal
  mv?: number;  // marginVertical
  mb?: number;  // marginBottom
  mt?: number;  // marginTop
  mr?: number;  // marginRight
  ml?: number;  // marginLeft
  fontFamily?: string;  // Novo campo para o fontFamily
  spacing?: number;  // Espaçamento entre as linhas
  style?: TextStyle;  // Adicionando estilo adicional
  level?: 1 | 2 | 3 | 4 | 5 | 6;  // Novo campo para level (h1-h6)
}

// Interface para os props dos componentes
interface TextComponentProps extends StyleProps {
  children: React.ReactNode;  // children é obrigatório, mas pode ser null ou undefined
}

// Configurações de level (h1-h6)
const levelConfig = {
  1: { size: 32, fontFamily: 'Font_Bold', color: '#F3FAFF' },
  2: { size: 28, fontFamily: 'Font_Bold', color: '#FFF' },
  3: { size: 24, fontFamily: 'Font_Medium', color: '#FFF' },
  4: { size: 20, fontFamily: 'Font_Medium', color: '#FFF' },
  5: { size: 18, fontFamily: 'Font_Book', color: '#FFF' },
  6: { size: 16, fontFamily: 'Font_Book', color: '#FFF' },
};

// Função utilitária para gerenciar estilos
const getStyle = ({ 
  size, 
  align, 
  color, 
  mh, 
  mv, 
  mb, 
  mt, 
  mr, 
  ml, 
  fontFamily, 
  spacing, 
  style,
  level 
}: StyleProps & { style?: TextStyle }): TextStyle => {
  // Se level for especificado, usar as configurações do level
  if (level && levelConfig[level]) {
    const levelStyle = levelConfig[level];
    return {
      fontSize: levelStyle.size,
      textAlign: align || 'left',
      color: color || levelStyle.color,
      marginHorizontal: mh || 0,
      marginVertical: mv || 0,
      marginBottom: mb || 0,
      marginTop: mt || 0,
      marginRight: mr || 0,
      marginLeft: ml || 0,
      lineHeight: levelStyle.size * 1.2,
      letterSpacing: spacing || 0,
      fontFamily: fontFamily || levelStyle.fontFamily,
      flexWrap: 'wrap',
      ...style,
    };
  }

  // Estilo padrão quando level não é especificado
  return {
    fontSize: size || 16,
    textAlign: align || 'left',
    color: color || '#000',
    marginHorizontal: mh || 0,
    marginVertical: mv || 0,
    marginBottom: mb || 0,
    marginTop: mt || 0,
    marginRight: mr || 0,
    marginLeft: ml || 0,
    lineHeight: size ? size * 1.04 : 24,
    letterSpacing: spacing || 0,
    fontFamily: fontFamily || 'Font_Book',
    flexWrap: 'wrap',
    ...style,
  };
};

// Função helper para converter ReactNode para string de forma segura
const getAccessibilityLabel = (children: React.ReactNode): string => {
  if (typeof children === 'string') {
    return children;
  }
  if (typeof children === 'number') {
    return children.toString();
  }
  if (React.isValidElement(children)) {
    // Se for um elemento React, tenta extrair o texto dos children
    const childChildren = children.props?.children;
    if (typeof childChildren === 'string') {
      return childChildren;
    }
    if (typeof childChildren === 'number') {
      return childChildren.toString();
    }
  }
  // Fallback para casos complexos
  return '';
};

// Componente HeadTitle com fontFamily inline
export const HeadTitle = ({
  size = 32,
  align,
  color = '#F3FAFF',
  mh,
  mv,
  mb,
  mt,
  mr,
  ml,
  fontFamily = 'Font_Book',
  children,
  spacing,
  style,
  level,
}: TextComponentProps) => {
  const styleProps = { size, align, color, mh, mv, mb, mt, mr, ml, fontFamily, spacing, style, level };
  return (
    <Text
      style={getStyle(styleProps as StyleProps & { style?: TextStyle })}
      accessible={true}
      accessibilityLabel={getAccessibilityLabel(children)}
      accessibilityRole={'header'}
    >
      {children}
    </Text>
  );
};

// Componente Title com fontFamily inline
export const Title = ({
  size = 28,
  align,
  color = "#FFF",
  mh,
  mv,
  mb,
  mt,
  mr,
  ml,
  fontFamily = 'Font_Bold',
  children,
  spacing,
  style,
  level,
}: TextComponentProps) => {
  const styleProps = { size, align, color, mh, mv, mb, mt, mr, ml, fontFamily, spacing, style, level };
  return (
    <Text
      style={getStyle(styleProps as StyleProps & { style?: TextStyle })}
      accessible={true}
      accessibilityLabel={getAccessibilityLabel(children)}
      accessibilityRole={'header'}
    >
      {children}
    </Text>
  );
};

// Componente Label com fontFamily inline
export const Label = ({
  size = 16,
  align,
  color = "#B2B2B2",
  mh,
  mv,
  mb,
  mt,
  mr,
  ml,
  fontFamily = 'Font_Book',
  children,
  spacing,
  style,
  level,
}: TextComponentProps) => {
  const styleProps = { size, align, color, mh, mv, mb, mt, mr, ml, fontFamily, spacing, style, level };
  return (
    <Text
      style={getStyle(styleProps as StyleProps & { style?: TextStyle })}
      accessible={true}
      accessibilityLabel={getAccessibilityLabel(children)}
      accessibilityRole={'text'}
    >
      {children}
    </Text>
  );
};

// Componente SubLabel com fontFamily inline
export const SubLabel = ({
  size = 14,
  align,
  color = "#B2B2B2",
  mh,
  mv,
  mb,
  mt,
  mr,
  ml,
  fontFamily = 'Font_Book',
  children,
  spacing,
  style,
  level,
}: TextComponentProps) => {
  const styleProps = { size, align, color, mh, mv, mb, mt, mr, ml, fontFamily, spacing, style, level };
  return (
    <Text
      style={getStyle(styleProps as StyleProps & { style?: TextStyle })}
      accessible={true}
      accessibilityLabel={getAccessibilityLabel(children)}
      accessibilityRole={'text'}
    >
      {children}
    </Text>
  );
};

// Componente Description com fontFamily inline
export const Description = ({
  size = 14,
  align,
  color = "#B2B2B2",
  mh,
  mv,
  mb,
  mt,
  mr,
  ml,
  fontFamily = 'Font_Book',
  children,
  spacing,
  style,
  level,
}: TextComponentProps) => {
  const styleProps = { size, align, color, mh, mv, mb, mt, mr, ml, fontFamily, spacing, style, level };
  return (
    <Text
      style={getStyle(styleProps as StyleProps & { style?: TextStyle })}
      accessible={true}
      accessibilityLabel={getAccessibilityLabel(children)}
      accessibilityRole={'text'}
    >
      {children}
    </Text>
  );
};

// Componente Heading genérico que usa level
export const Heading = ({
  level = 1,
  align,
  color,
  mh,
  mv,
  mb,
  mt,
  mr,
  ml,
  fontFamily,
  children,
  spacing,
  style,
}: TextComponentProps) => {
  const styleProps = { level, align, color, mh, mv, mb, mt, mr, ml, fontFamily, spacing, style };
  return (
    <Text
      style={getStyle(styleProps as StyleProps & { style?: TextStyle })}
      accessible={true}
      accessibilityLabel={getAccessibilityLabel(children)}
      accessibilityRole={'header'}
    >
      {children}
    </Text>
  );
};

export const U = ({
  children
}: TextComponentProps) => {
  return (
    <Text
      style={{ textDecorationLine: 'underline', textDecorationStyle: 'solid' }}
    >{children}</Text>
  )
}