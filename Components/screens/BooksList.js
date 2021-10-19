import React, {useEffect} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
import { addBookmark, removeBookmark} from '../redux/actions';
export default function BooksList () {
  const {books, bookmarks} = useSelector (state => state.booksReducer);
  const dispatch = useDispatch ();
  const addToBookmarkList = book => dispatch (addBookmark (book));


  const handleAddBookmark = book => {
    addToBookmarkList (book);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#1E1B26'}}>
      <View style={{flex: 1, paddingHorizontal: 16}}>
        <Text style={{color: 'white', fontSize: 22}}>Bestsellers</Text>
        <View style={{flex: 1, marginTop: 8}}>

          <View style={{marginVertical: 12}}>
            <View style={{flexDirection: 'row', flex: 1}}>
              <View style={{flex: 1, marginLeft: 12}}>
                {/* Book Title */}
                <View>
                  <Text
                    style={{fontSize: 22, paddingRight: 16, color: 'white'}}
                  >
                    Helo
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 10,
                    alignItems: 'center',
                  }}
                >
                  <Text
                    style={{fontSize: 14, paddingLeft: 10, color: '#64676D'}}
                  >
                    njn
                  </Text>
                  <Text
                    style={{fontSize: 14, paddingLeft: 10, color: '#64676D'}}
                  >
                    lllll
                  </Text>
                </View>
                <View style={{marginTop: 14}}>
                  <TouchableOpacity
                    onPress={() => handleAddBookmark ('ADDing')}
                    activeOpacity={1}
                    style={{
                      flexDirection: 'row',
                      padding: 2,
                      backgroundColor: '#FFFFFF',
                      borderRadius: 20,
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: 40,
                      width: 40,
                    }}
                  >
                    <Text>Add boo</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

        </View>
      </View>
    </SafeAreaView>
  );
}
