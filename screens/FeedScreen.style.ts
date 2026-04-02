import { StyleSheet } from 'react-native'
import { WIN, FONT } from './Theme.style'

export const s = StyleSheet.create({
  bg: { flex: 1, backgroundColor: WIN.bg },
  window: {
    borderBottomWidth: 2, borderBottomColor: WIN.darker,
  },
  titleBar: {
    backgroundColor: WIN.purpleDark,
    padding: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleBarText: { color: '#fff', fontFamily: FONT, fontSize: 18, letterSpacing: 1 },
  titleBtns: { flexDirection: 'row', gap: 2 },
  titleBtn: {
    width: 18, height: 18,
    backgroundColor: WIN.bg,
    borderTopWidth: 1.5, borderTopColor: WIN.light,
    borderLeftWidth: 1.5, borderLeftColor: WIN.light,
    borderRightWidth: 1.5, borderRightColor: WIN.darker,
    borderBottomWidth: 1.5, borderBottomColor: WIN.darker,
    alignItems: 'center', justifyContent: 'center',
  },
  titleBtnText: { fontFamily: FONT, fontSize: 12, color: WIN.text },
  statusBar: {
    padding: 4, paddingHorizontal: 8,
    flexDirection: 'row', gap: 8,
    backgroundColor: WIN.bg,
  },
  statusCell: {
    borderTopWidth: 1, borderTopColor: WIN.darker,
    borderLeftWidth: 1, borderLeftColor: WIN.darker,
    borderRightWidth: 1, borderRightColor: WIN.light,
    borderBottomWidth: 1, borderBottomColor: WIN.light,
    paddingHorizontal: 6, paddingVertical: 1,
  },
  statusText: { fontFamily: FONT, fontSize: 13, color: WIN.dark, letterSpacing: 1 },
  list: { padding: 12, gap: 10 },
  card: {
    borderTopWidth: 2, borderTopColor: WIN.light,
    borderLeftWidth: 2, borderLeftColor: WIN.light,
    borderRightWidth: 2, borderRightColor: WIN.darker,
    borderBottomWidth: 2, borderBottomColor: WIN.darker,
    backgroundColor: WIN.bg,
  },
  cardTitleBar: {
    backgroundColor: WIN.teal,
    padding: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  cardTitleText: {
    color: WIN.white, fontFamily: FONT,
    fontSize: 18, letterSpacing: 1, flex: 1,
  },
  cardGhosts: { fontSize: 14 },
  cardBody: { padding: 8, gap: 6 },
  cardMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardMetaText: {
    fontFamily: FONT, fontSize: 14,
    color: WIN.dark, letterSpacing: 1,
  },
  noteBox: {
    borderTopWidth: 1, borderTopColor: WIN.darker,
    borderLeftWidth: 1, borderLeftColor: WIN.darker,
    borderRightWidth: 1, borderRightColor: WIN.light,
    borderBottomWidth: 1, borderBottomColor: WIN.light,
    backgroundColor: WIN.white,
    padding: 6,
  },
  noteText: {
    fontFamily: FONT, fontSize: 15,
    color: WIN.text, letterSpacing: 1,
    fontStyle: 'italic',
  },
  empty: { alignItems: 'center', marginTop: 60, gap: 8 },
  emptyText: { fontFamily: FONT, fontSize: 20, color: WIN.dark, letterSpacing: 1 },
})