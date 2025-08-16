//CONST
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
import { theme } from '@s2mangas/core';

import { Dimensions, Pressable, View } from "react-native";
import { Column, Row, Main, ScrollHorizontal, ScrollVertical } from "./layout/layout";
import { Title, HeadTitle, Label, SubLabel, U, Description } from "./text/text";

import Button from "./button/button";
import Avatar from "./avatar/avatar";
import Skeleton from "./skeleton/skeleton";
import InputBig from "./input/input_big";
import InputOTP from "./otp/otp";
import Toast from "./toast/toast";
import Sheet from './sheet/sheet';
import Select from './select/select';
import Loader from './loader/loader';
import Toggle from "./toggle/toggle";
import Badge from "./badge/badge";
import MultiStepProgress from "./progress/progress";
import CheckBox from "./checkbox/checkbox";
import Tabs from "./tabs/tabs"; 
import Image from "./image/image";
import FlatList from "./flatlist/flatlist";
import Switch from "./switch/switch";
import Icon from "./icon/icon";
import Card from "./card/card";
import Modal from "./modal";
import Divider from "./divider/divider";

export {
    MultiStepProgress,
    Column, Row, Main, ScrollHorizontal, ScrollVertical,
    Title, HeadTitle, Label, SubLabel, U, Description,
    Button, Avatar, theme, 
    Skeleton,
    Tabs, 
    SCREEN_WIDTH, SCREEN_HEIGHT,
    InputBig as Input, Toast,
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
    View
};
    
