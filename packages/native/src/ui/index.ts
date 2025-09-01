//CONST
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
import { theme } from '@s2mangas/core';

import { Dimensions, Pressable, View } from "react-native";
import { Column, Row, Main, ScrollHorizontal, ScrollVertical } from "./layout/layout";
import { Title, HeadTitle, Label, SubLabel, U, Description } from "./text/text";
import Radio from "./radio/radio";
import Button from "./button/button";
import Avatar from "./avatar/avatar";
import Skeleton from "./skeleton/skeleton";
import Input from "./input/input";
import InputOTP from "./otp/otp";
import Toast from "./toast/toast";
import Sheet from './sheet/sheet';
import Select from './select/select';
import Selectable from './selectable/selectable';
import Loader from './loader/loader';
import Toggle from "./toggle/toggle";
import Badge from "./badge/badge";
import Chip from './chip/chip';

import MultiStepProgress from "./progress/progress";
import CheckBox from "./checkbox/checkbox";
import Tabs from "./tabs/tabs";
import Image from "./image/image";
import FlatList from "./flatlist/flatlist";
import Switch from "./switch/switch";
import Icon from "./icon/icon";
import Card from "./card/card";
import Modal from "./modal/modal";
import Divider from "./divider/divider";
import SearchIssues from "./search-issues/search-issues";


import type { ImageProps } from "./image/image";
import type { } from ".//";
import type { SheetProps } from "./sheet/sheet";
import type { InputProps, InputBigRef } from "./input/input";
import type { SwitchProps } from './switch/switch';
import type { ButtonProps } from './button/button';
import type { BadgeProps } from "./badge/badge";
import type { ChipProps } from './chip/chip';
import type { SkeletonProps } from './skeleton/skeleton';
import type { SelectableProps } from './selectable/selectable';
import type { CheckBoxProps } from './checkbox/checkbox';

export {
    MultiStepProgress,
    Column, Row, Main, ScrollHorizontal, ScrollVertical,
    Title, HeadTitle, Label, SubLabel, U, Description,
    Button, Avatar, theme,
    Skeleton,
    Tabs,
    SCREEN_WIDTH, SCREEN_HEIGHT,
    Input, Toast,
    Sheet, Select, Loader,
    Image, Toggle, InputOTP,
    Badge,
    Pressable,
    CheckBox,
    Switch,
    Icon,
    FlatList,
    Card,
    Modal,
    Divider,
    View,
    Radio,
    SearchIssues,
    Selectable,
    Chip
};

export type {
    SheetProps,
    ChipProps,
    BadgeProps,
    InputProps,
    InputBigRef,
    SwitchProps,
    ButtonProps,
    CheckBoxProps,
    SelectableProps,
    SkeletonProps,
    ImageProps,

};