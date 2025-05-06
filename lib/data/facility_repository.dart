import 'package:supabase_flutter/supabase_flutter.dart';
import '../models/facility.dart';

class FacilityRepository {
  final _supabase = Supabase.instance.client;

  Future<List<Facility>> fetchByDate(DateTime date) async {
    final ymd = '${date.year}-${date.month.toString().padLeft(2, '0')}-'
                '${date.day.toString().padLeft(2, '0')}';

    final res = await _supabase
        .from('available')
        .select('*, stadiums(*)') // ← stadiums テーブルの情報も含める
        .eq('date', ymd);

       print(res.toString());   // ← いったんこれで形を確認

    return (res as List<dynamic>).map((e) => Facility.fromMap(e)).toList();
  }
}
