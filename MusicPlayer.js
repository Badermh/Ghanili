import { Audio } from "expo-av";
import { useState } from "react";
import { View, Button } from "react-native";

export default function MusicPlayer() {
    const [sound, setSound] = useState();

    async function playSound() {
        const { sound } = await Audio.Sound.createAsync(
            require("./assets/sample.mp3")
        );
        setSound(sound);
        await sound.playAsync();
    }

    async function stopSound() {
        if (sound) {
            await sound.stopAsync();
        }
    }

    return (
        <View>
            <Button title="Play Music" onPress={playSound} />
            <Button title="Stop Music" onPress={stopSound} />
        </View>
    );
}
