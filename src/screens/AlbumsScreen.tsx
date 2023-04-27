import React, { useContext } from 'react'
import { Text, View, Button } from 'react-native';
import { styles } from '../themes/appTheme'
import { AuthContext } from '../context/AuthContext';

export const AlbumsScreen = () => {

    const { logOut, authState: { isLoggedIn } } = useContext(AuthContext)

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                AlbumsScreen
            </Text>

            {
                isLoggedIn && (
                    <Button
                        title="Log Out"
                        onPress={logOut}
                    />
                )
            }
        </View>
    )
}
