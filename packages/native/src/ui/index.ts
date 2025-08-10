import { Dimensions, Pressable, View } from "react-native";
import { Column, Row, Main,  ScrollHorizontal, ScrollVertical } from "./layout";
import { Title, HeadTitle, Label, SubLabel, U, Description } from "./text";
import Button from "./button";
import Avatar from "./avatar";
import { Skeleton } from "./skeleton";
import Input from "./input";
import InputOTP from "./otp";
import { theme } from '@s2mangas/core';
import Message from "./message";
import Sheet from './sheet';
import Select from './select';
import Loader from './loader';
import Check from './check'
import Toggle from "./toggle";
import Badge from "./badge";
import MultiStepProgress from "./progress";
import CheckBox from "./checkbox";
import Tabs from "./tabs"; 
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
import Image from "./image";
import FlatList from "./flatlist";
import Line from "./line";
import Switch from "./switch";
import Icon from "./icon";
import Card from "./card";
import Modal from "./modal";
import Divider from "./divider";

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
    
