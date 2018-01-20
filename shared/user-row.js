import React from 'react';
import ReactNative, {
  Text,
  View,
  Image,
} from 'react-native';
import style from '../style/user-post-style';

export default class UserRow extends React.Component {
  render() {
    const { user } = this.props;
    const { name, username, email, phone, website, address, company } = user;
    const { street, suite, city, zipcode, geo } = address;
    const { lat, lng } = geo;
    const { catchPhrase, bs } = company
    return (
      <View style={[style.userRowWrapper, style.columns]}>
        <Text style={[style.listText, style.listTitle]}>{name}</Text>
        <Text style={style.listText}>Username: {username}</Text>
        <Text style={style.listText}>Street: {street}</Text>
        <Text style={style.listText}>Suite: {suite}</Text>
        <Text style={style.listText}>City: {city}</Text>
        <Text style={style.listText}>Zipcode: {zipcode}</Text>
        <Text style={style.listText}>Latitude: {lat}</Text>
        <Text style={style.listText}>Longitude: {lng}</Text>
        <Text style={style.listText}>Phone: {phone}</Text>
        <Text style={style.listText}>Website: {website}</Text>
        <Text style={style.listText}>Company Name: {company.name}</Text>
        <Text style={style.listText}>Catch Phrase: {catchPhrase}</Text>
        <Text style={style.listText}>Tagline: {bs}</Text>
      </View>
    );
  }
}
