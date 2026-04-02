import { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import {s} from './AddScreen.style'
import { useAddScreen } from '../hooks/useAddScreen'
import { GHOST } from './Theme.style'

const SPOOKS = [1, 2, 3, 4, 5] as const

export default function AddScreen({ navigation }: any) {
 const {
    title, setTitle,
    addedBy, setAddedBy,
    spooks, setSpooks,
    note, setNote,
    fontsLoaded,
    handleSubmit,
  } = useAddScreen(navigation)

  if (!fontsLoaded) return null

  return (
    <ScrollView style={s.bg} contentContainerStyle={s.container}>
      <View style={s.window}>

        <View style={s.titleBar}>
          <Text style={s.titleBarText}>{GHOST} add movie — spookies.exe</Text>
          <View style={s.titleBtns}>
            <View style={s.titleBtn}><Text style={s.titleBtnText}>_</Text></View>
            <View style={s.titleBtn}><Text style={s.titleBtnText}>□</Text></View>
            <View style={s.titleBtn}><Text style={s.titleBtnText}>✕</Text></View>
          </View>
        </View>

        <View style={s.formBody}>

          <View style={s.fieldGroup}>
            <Text style={s.fieldLabel}>MOVIE TITLE</Text>
            <TextInput
              style={s.fieldInput}
              placeholder="e.g. Hereditary"
              placeholderTextColor="#8a9aaa"
              value={title}
              onChangeText={setTitle}
            />
          </View>

          <View style={s.fieldGroup}>
            <Text style={s.fieldLabel}>YOUR NAME</Text>
            <TextInput
              style={s.fieldInput}
              placeholder="e.g. Dana"
              placeholderTextColor="#8a9aaa"
              value={addedBy}
              onChangeText={setAddedBy}
            />
          </View>

          <View style={s.fieldGroup}>
            <Text style={s.fieldLabel}>SPOOKIES RATING</Text>
            {SPOOKS.map((n) => (
              <TouchableOpacity
                key={n}
                style={[s.radioRow, spooks === n && s.radioRowSelected]}
                onPress={() => setSpooks(n)}
                activeOpacity={0.7}
              >
                <View style={s.radioDot}>
                  {spooks === n && <View style={s.radioDotInner} />}
                </View>
                <Text style={s.radioLabel}>{n} spooky</Text>
                <Text style={s.ghostIcons}>{GHOST.repeat(n)}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={s.fieldGroup}>
            <Text style={s.fieldLabel}>NOTES (optional)</Text>
            <TextInput
              style={[s.fieldInput, s.notesInput]}
              placeholder="what scared you most..."
              placeholderTextColor="#8a9aaa"
              value={note}
              onChangeText={setNote}
              multiline
            />
          </View>

        </View>

        <View style={s.btnRow}>
          <TouchableOpacity style={s.btn} onPress={() => navigation.navigate('Feed')}>
            <Text style={s.btnText}>cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[s.btn, s.btnPrimary]} onPress={handleSubmit}>
            <Text style={[s.btnText, s.btnPrimaryText]}>log it {GHOST}</Text>
          </TouchableOpacity>
        </View>

        <View style={s.statusBar}>
          <View style={s.statusCell}><Text style={s.statusText}>spookies v1.0</Text></View>
        </View>

      </View>
    </ScrollView>
  )
}