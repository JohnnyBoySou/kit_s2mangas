import React, { useState } from "react";
import { View, Text, Pressable, ScrollView, } from "react-native";
import type { ViewStyle, TextStyle } from "react-native";

// Interface para as opções do Select
interface Option {
  label: string; // Texto visível
  value: any;      // Valor associado
}

// Interface para os props do Select
interface SelectProps {
  options: Option[]; // Lista de opções
  value: Option;      // Valor selecionado atualmente
  onChange: (value: any) => typeof value; // Função chamada ao selecionar uma opção
  placeholder?: string; // Texto exibido quando nada está selecionado
  style?: ViewStyle;    // Estilo adicional para o contêiner principal
  textStyle?: TextStyle; // Estilo adicional para o texto do campo principal
  testID?: string;      // ID para testes
  disabled?: boolean;   // Se o campo está desabilitado
  accessibilityRole?: "button"; // Função chamada ao selecionar uma opção
  accessibilityLabel?: string; // Função chamada ao selecionar uma opção
}

const Select: React.FC<SelectProps> =({
  options,
  value,
  onChange,
  placeholder = "Selecione uma opção",
  style,
  textStyle,
  testID,
  accessibilityLabel,
  accessibilityRole,
  disabled,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Encontra o label da opção selecionada
  const selectedOption = options.find((opt) => opt.value === value);
  const displayText = selectedOption ? selectedOption.label : placeholder;

  return (
    <View style={{ position: "relative" }} >
      {/* Campo principal */}
      <Pressable
        testID={testID}
        disabled={disabled}
        accessibilityLabel={accessibilityLabel}
        accessibilityRole={accessibilityRole}
        onPress={() => setIsOpen(!isOpen)}
        style={[
          {
            paddingVertical: 12,
            paddingHorizontal: 16,
            borderWidth: 1,
            borderColor: "#303030",
            borderRadius: 8,
            backgroundColor: "#fff",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            opacity: disabled? 0.5 : 1,
          },
          style,
        ]}
      >
        <Text
          style={[
            {
              fontSize: 16,
              color: selectedOption ? "#000" : "#606060",
            },
            textStyle,
          ]}
        >
          {displayText}
        </Text>
        <Text style={{ fontSize: 16 }}>{isOpen ? "▲" : "▼"}</Text>
      </Pressable>

      {/* Lista de opções */}
      {isOpen && (
        <ScrollView
          style={{
            position: "absolute",
            top: 50, // Abaixo do campo principal
            left: 0,
            right: 0,
            maxHeight: 200, // Limite de altura com rolagem
            backgroundColor: "#fff",
            borderWidth: 1,
            borderColor: "#303030",
            borderRadius: 8,
            zIndex: 10,
            elevation: 5, // Sombra no Android
            shadowColor: "#000", // Sombra no iOS
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
          }}
        >
          {options.map((option) => (
            <Pressable
              key={String(option.value)}
              onPress={() => {
                onChange(option.value);
                setIsOpen(false); // Fecha a lista ao selecionar
              }}
              style={{
                paddingVertical: 10,
                paddingHorizontal: 16,
                backgroundColor: option.value === value ? "#f0f0f0" : "#fff",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: option.value === value ? "#007bff" : "#000",
                }}
              >
                {option.label}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default Select;