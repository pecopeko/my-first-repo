import 'package:flutter/material.dart';

class Facility {
  final String id;           // PK / 画面遷移用
  final String name;
  final String prefecture;
  final String city;
  final String sportsType;   // camelCase
  final DateTime date;       // 2025‑05‑03
  final TimeOfDay start;     // 10:00
  final TimeOfDay end;       // 12:00

  const Facility({
    required this.id,
    required this.name,
    required this.prefecture,
    required this.city,
    required this.sportsType,
    required this.date,
    required this.start,
    required this.end,
  });

  /* ---------- DB → モデル ---------- */
 factory Facility.fromMap(Map<String, dynamic> map) {
  // ネストが無い or null の場合に備えておく
  final Map<String, dynamic>? stadium = map['stadiums'] as Map<String, dynamic>?;

  TimeOfDay _safeTime(String? s) =>
      (s != null && s.contains(':')) ? _toTimeOfDay(s) : const TimeOfDay(hour: 0, minute: 0);

  return Facility(
    id: (map['id'] ?? '').toString(),                   // null なら空文字
    name:        stadium?['name']        as String? ?? '',
    prefecture:  stadium?['prefecture']  as String? ?? '',
    city:        stadium?['city']        as String? ?? '',
    sportsType:  stadium?['sports_type'] as String? ?? '',
    date: map['date'] != null
        ? DateTime.parse(map['date'])
        : DateTime(1970),                               // null ならダミー日付
    start: _safeTime(map['start_time'] as String?),
    end:   _safeTime(map['end_time']   as String?),
  );
}

  // factory Facility.fromMap(Map<String, dynamic> map) => Facility(
  //       id:           map['id'].toString(),
  //       name:         map['name']        as String,
  //       prefecture:   map['prefecture']  as String,
  //       city:         map['city']        as String,
  //       sportsType:   map['sports_type'] as String,
  //       date:  DateTime.parse(map['date']       as String),
  //       start: _toTimeOfDay(map['start_time']   as String),
  //       end:   _toTimeOfDay(map['end_time']     as String),
  //     );

  /* ---------- モデル → DB ---------- */
  // Map<String, dynamic> toMap() => {
  //       'id':           id,
  //       'name':         name,
  //       'prefecture':   prefecture,
  //       'city':         city,
  //       'sports_type':  sportsType,
  //       'date':         date.toIso8601String().split('T').first, // yyyy‑MM‑dd
  //       'start_time':   _hhmm(start),  // HH:mm
  //       'end_time':     _hhmm(end),
  //     };

  /* ---------- ユーティリティ ---------- */

  static TimeOfDay _toTimeOfDay(String hhmm) {
    final parts = hhmm.split(':');
    return TimeOfDay(
      hour:   int.parse(parts[0]),
      minute: int.parse(parts[1]),
    );
  }

  // static String _hhmm(TimeOfDay tod) =>
  //     '${tod.hour.toString().padLeft(2, '0')}:'
  //     '${tod.minute.toString().padLeft(2, '0')}';
}
