import {Image} from "react-native";

export function BookImage(props) {
    return props.coverURL ? <Image source={{uri: props.coverURL}} style={{width: 72, height: 116}}/> : <></>;
}
