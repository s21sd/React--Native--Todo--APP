import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
const Tasks = (props) => {
    const { task, onDelete, completed, onToggle } = props;

    return (
        <View
            style={{
                width: '50%',
                padding: 7,
                boxSizing: 'border-box',
            }}
        >


            <View
                style={{
                    backgroundColor: '#fff',
                    padding: 15,
                    borderRadius: 20,
                    height: 150,
                    flexDirection: 'coloum',
                    justifyContent: 'space-between',
                    // flexWrap: 'wrap',
                    marginBottom: 20,
                }}
            >
                <Text
                    style={{
                        textDecorationLine: completed ? 'line-through' : 'none',
                        fontSize: 20,
                        fontWeight: 'bold',
                        justifyContent: 'center',
                        
                    }}
                >
                    {task}
                </Text>

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >
                    <TouchableOpacity
                        style={{
                            width: 30,
                            height: 30,
                            backgroundColor: completed ? '#328551' : '#122f2b',
                            opacity: 0.4,
                            borderRadius: 10,
                            marginRight: 10,
                            alignItems:'center',
                            justifyContent:'center'
                        }}
                        onPress={onToggle}
                    ><Ionicons name="checkmark-done" size={24} color="black" /></TouchableOpacity>
                    <TouchableOpacity onPress={onDelete}>
                        <MaterialIcons name="delete" size={30} color="#328551" />
                    </TouchableOpacity>


                </View>


            </View>


        </View>
    );
};

export default Tasks;
