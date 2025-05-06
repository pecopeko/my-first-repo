import 'package:flutter/material.dart';
import '../models/facility.dart'; 
import '../data/facility_repository.dart';
import 'facility_card.dart';

class FacilityGrid extends StatelessWidget {
  const FacilityGrid({super.key, required this.date});

  final DateTime date;

 @override
  Widget build(BuildContext context) {
    return FutureBuilder<List<Facility>>(
      future: FacilityRepository().fetchByDate(date),
      builder: (context, snap) {
        if (snap.connectionState != ConnectionState.done) {
          return const Center(child: CircularProgressIndicator());
        }
        if (snap.hasError) {
          return Center(child: Text('読み込み失敗: ${snap.error}'));
        }
        final facilities = snap.data ?? [];

        return GridView.builder(
          padding: const EdgeInsets.all(16),
          itemCount: facilities.length,
          gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: 2,
            crossAxisSpacing: 12,
            mainAxisSpacing: 12,
            childAspectRatio: 0.72,
          ),
          itemBuilder: (_, i) => FacilityCard(
            facility: facilities[i],
            onTap: () {
              // Navigator.push(...)
            },
          ),
        );
      },
    );
  }
}