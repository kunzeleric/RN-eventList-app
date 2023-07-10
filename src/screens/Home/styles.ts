import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131016',
        padding: 24
    },
    eventName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FDFCFE',
        marginTop: 48
    },
    eventDate: {
        fontSize: 16,
        color: '#6B6B6B'
    },
    input: {
        flex: 1,
        padding: 16,
        height: 56,
        color: '#FFF',
        borderRadius: 5,
        backgroundColor: '#1F1E25',
        fontSize: 16
    },
    buttonText: {
        color: '#FFF',
        fontSize: 24,
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#31CF67',
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 10,
        width: '100%'
    },
    listaWrapper:{
        marginTop: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#FFF',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    lista: {
        borderColor: '#FFF',

    },
    listaText: {
        color: '#FFF',
        fontSize: 18,
    }
})