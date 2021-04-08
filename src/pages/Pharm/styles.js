import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 0 20px;
    padding-top: 50px;
    flex: 1;
    background: white;
    display: flex;
`;

export const Keyboard = styled.KeyboardAvoidingView.attrs({
    behavior: 'padding',
})``;

export const Content = styled.View`
    display: flex;
    align-items: center;
`;

export const Figure = styled.Image.attrs({
    resizeMode: 'contain',
})`
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100px;
    height: 100px;
`;

export const Name = styled.Text.attrs({
    numberOfLines: 2,
})`
    font-family: 'Nunito Regular';
    font-size: 18px;
    color: black;
    text-align: center;
`;

export const Neighborhood = styled.Text`
    margin-top: 10px;
    font-family: 'Nunito Regular';
    font-size: 18px;
    color: #808080;
    text-align: center;
`;

export const SearchMedicineContainer = styled.View`
    margin-top: 20px;
    width: 100%;
`;

export const List = styled.FlatList`
    margin-top: 20px;
`;

export const Medicine = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    height: 45px;
`;

export const MedicineColumn = styled.View`
    flex: 1;
    margin-left: 20px;
`;

export const MedicineIcon = styled.Image.attrs({
    resizeMode: 'contain',
})`
    width: 30px;
    height: 30px;
`;

export const MedicineName = styled.Text`
    font-size: 18px;
    font-family: 'Nunito Regular';
    color: black;
`;

export const Alert = styled.Text.attrs({
    numberOfLines: 2,
})`
    width: 150px;
    font-size: 12px;
    font-family: 'Nunito Regular';
    color: orange;
`;

export const MedicineQuantity = styled.Text`
    font-size: 18px;
    font-family: 'Nunito Regular';
    color: #808080;
`;

export const MessageContainer = styled.View`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Message = styled.Text`
    width: 200px;
    font-size: 18px;
    font-family: 'Nunito Regular';
    color: black;
    text-align: center;
`;
