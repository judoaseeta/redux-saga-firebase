declare module 'redux-saga-firebase' {
    import { Channel } from 'redux-saga';
    import { Action } from 'redux';
    export default class ReduxSagaFirebase {
        constructor(app: firebase.app.App)
        region: string
        auth : {
            channel(): Channel<firebase.User | firebase.FirebaseError>,
            signInWithEmailAndPassword(email: string, password: string): firebase.User,
            signInAndRetrieveDataWithCredential(credential: firebase.auth.AuthCredential): firebase.auth.UserCredential,
            signInAnonymously(): firebase.auth.UserCredential,
            signInWithCredential(credential: firebase.auth.AuthCredential): firebase.User,
            signInWithCustomToken(token: string): firebase.User,
            signInWithPhoneNumber(phoneNumber: string, applicationVerifier: firebase.auth.ApplicationVerifier): firebase.auth.ConfirmationResult,
            signInWithPopup(authProvider: firebase.auth.AuthProvider): firebase.auth.AuthCredential,
            signInWithRedirect(authProvider: firebase.auth.AuthProvider): void,
            signOut(): void,
        }
        database: {
            
            channel(pathOrRef: string | firebase.database.Reference, event?: string): Channel<{snapshot: firebase.database.DataSnapshot, value: any}>,
            read(pathOrRef: string | firebase.database.Reference): any,
            create(pathOrRef: string | firebase.database.Reference, data: any): string,
            update(pathOrRef: string | firebase.database.Reference, data: any): void,
            patch(pathOrRef: string | firebase.database.Reference, data: any): void,
            delete(pathOrRef: string | firebase.database.Reference): void,
            sync(pathOrRef: string | firebase.database.Reference, actionCreator: <A extends Action>(value: any) => A , transform: (value: any) => any): void;
        }
        functions: {
            call(functionName: string, parameters:{}): any;
        }
        messagings: {
            channel(): any;
            tokenRefreshChannel(): any;
        }
        storage: {
            uploadFile(pathOrRef: string |  firebase.storage.Reference, file: Blob | File | Uint8Array , metadata?: firebase.storage.UploadMetadata): firebase.storage.UploadTask,
            uploadString(pathOrRef: string | firebase.storage.Reference, string: string, format?: string, metadata?: firebase.storage.UploadMetadata): firebase.storage.UploadTask,
            getDownloadURL(pathOrRef: string | firebase.storage.Reference): string,
            getFileMetadata(pathOrRef: string | firebase.storage.Reference): firebase.storage.FullMetadata,
            updateFileMetadata(pathOrRef: string | firebase.storage.Reference, newMetadata: firebase.storage.SettableMetadata): firebase.storage.FullMetadata,
            deleteFile(pathOrRef: string | firebase.storage.Reference): void
        }
    }
}