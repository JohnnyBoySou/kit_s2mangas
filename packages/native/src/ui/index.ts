import { Dimensions, Pressable, View } from "react-native";
import { Column, Row, Main,  ScrollHorizontal, ScrollVertical } from "./layout/layout";
import { Title, HeadTitle, Label, SubLabel, U, Description } from "./text/text";
import Button from "./button/button";
import Avatar from "./avatar/avatar";
import { Skeleton } from "./skeleton/skeleton";
import Input from "./input";
import InputOTP from "./otp";
import { theme } from '@s2mangas/core';
import Message from "./message";
import Sheet from './sheet';
import Select from './select/select';
import Loader from './loader/loader';
import Check from './check/check'
import Toggle from "./toggle/toggle";
import Badge from "./badge/badge";
import MultiStepProgress from "./progress";
import CheckBox from "./checkbox/checkbox";
import Tabs from "./tabs/tabs"; 
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
import Image from "./image/image";
import FlatList from "./flatlist/flatlist";
import Line from "./line";
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
    Input, Message,
    Sheet, Select, Loader,
    Image, Check, Toggle, InputOTP,
    Badge,
    Pressable,
    CheckBox,
    Line,
    Switch,
    Icon,
    FlatList,
    Card,
    Modal,
    Divider,
    View
};
    
