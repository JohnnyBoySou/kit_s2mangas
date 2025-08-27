import React from "react";
import { Pressable } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming, interpolateColor } from "react-native-reanimated";
import { Row, Column } from "../layout/layout";
import { Title, Label } from "../text/text";
import Icon, { type IconName } from "../icon/icon";

interface SelectableProps {
    name: string;
    description: string;
    icon: IconName,
    onPress: () => void;
    status: boolean;
}

const Selectable: React.FC<SelectableProps> = ({ name, description, icon, onPress, status }) => {
    const scale = useSharedValue(1);
    const animatedStatus = useSharedValue(status ? 1 : 0);

    React.useEffect(() => {
        animatedStatus.value = withTiming(status ? 1 : 0, { duration: 300 });
    }, [status]);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }],
        borderColor: interpolateColor(
            animatedStatus.value,
            [0, 1],
            ["#000", "#fff"]
        ),
        backgroundColor: interpolateColor(
            animatedStatus.value,
            [0, 1],
            ["#202020", "#fff"]
        ),
        borderWidth: 2,
        borderRadius: 12
    }));

    return (
        <Pressable onPress={onPress}>
            <Animated.View style={[animatedStyle, { padding: 18 }]}>
                <Row gh={12}>
                    <Icon name={icon as IconName} size={28} color={status ? "#000" : "#fff"} />
                    <Column>
                        <Title size={18} spacing={-1} color={status ? "#000" : "#fff"}>
                            {name}
                        </Title>
                        <Label
                            size={14}
                            style={{ width: 260, marginTop: 6 }}
                            color={status ? "#202020" : "#d1d1d1"}
                        >
                            {description}
                        </Label>
                    </Column>
                </Row>
            </Animated.View>
        </Pressable>
    );
};

export default Selectable;