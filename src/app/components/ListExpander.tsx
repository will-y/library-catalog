import {useState} from "react";
import {StyleSheet, Text} from "react-native";
import {arrayToString} from "../utils/string-utils";
import {Pressable, useTheme} from "@react-native-material/core";

export function ListExpander(props) {
    const needToExpand = props.list.length > 10;
    const [currentList, setList] = useState(props.list.slice(0, 10) as string[]);
    const theme = useTheme();

    return (
        <Text style={props.style}>{arrayToString(currentList)}
            {needToExpand ? <Text style={{color: theme.palette.primary.main}}
                   onPress={() => {
                       setList(props.list);
                       console.log(props.list);
                   }}> {currentList !== props.list ? '...(More)' : ''}</Text> : <></>}
        </Text>
    );
}
