import React from 'react';
import { Text, View, Image, ToucahableOpacity, StyleSheet, TouchableOpacity } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({ selected }) => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0, 0 , 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

    return (
        <View
            style={{
                width: 6,
                height: 6,
                marginHorizontal: 3,
                backgroundColor
            }}
        />
    );
};

const Skip = ({...props}) => (
    <TouchableOpacity
     style={{marginHorizontal: 10}}
     {...props}
     >
         <Text style={{fontSize:16}}>Skip</Text>
    </TouchableOpacity>
);

const Next = ({...props}) => (
    <TouchableOpacity
     style={{marginHorizontal: 10}}
     {...props}
     >
         <Text style={{fontSize:16}}>Next</Text>
    </TouchableOpacity>
);

const Done = ({...props}) => (
    <TouchableOpacity
     style={{marginHorizontal: 10}}
     {...props}
     >
         <Text style={{fontSize:16}}>Done</Text>
    </TouchableOpacity>
);

const OnboardingScreen = ({navigation}) =>{
    return(
        <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}

        onSkip={() => navigation.replace("Login")}
        onSkip={() => navigation.navigate("Login")}

        pages={[
            {
                image: <Image source={require('../images/TL.png')}/>,
                title: 'Welcome to Our App!',
                subtitle: 'Share your stuff here!'
            },
            {
                image: <Image source={require('../images/TL.png')}/>,
                title: 'Something about onboarding!',
                subtitle: 'Pls help idk what to write~'
            },
            {
                image: <Image source={require('../images/TL.png')}/>,
                title: 'A duck walked up to a lemonade stand And he said to the man, running the stand "Hey! (Bum bum bum) Got any grapes?"!',
                subtitle: 'The man said "No we just sell lemonade. But it’s cold And it’s fresh And it’s all home-made. Can I get you Glass?" The duck said, “I’ll pass”.'
            },
        ]}
        />
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});


