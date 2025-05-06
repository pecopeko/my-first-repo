import 'package:flutter/material.dart';
import '../models/facility.dart';
import 'package:intl/intl.dart'; 

class FacilityCard extends StatelessWidget {
  final Facility facility;
  final VoidCallback? onTap;

  const FacilityCard({
    super.key,
    required this.facility,
    this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final dateStr = DateFormat('yyyy-MM-dd').format(facility.date);
    final startStr = facility.start.format(context);  // 例) 09:30
    final endStr   = facility.end.format(context);    // 例) 11:00

    return Card(
      elevation: 2,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
      color: Colors.lightBlue[50],
      clipBehavior: Clip.antiAlias,
      child: InkWell(
        onTap: onTap,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // // 画像
            // SizedBox(height: 12),
            // AspectRatio(
            //   aspectRatio: 16 / 9,
            //   child: Stack(
            //     fit: StackFit.expand,
            //     children: [
            //         Image.asset(
            //         facility.imageUrl,
            //         fit: BoxFit.contain,
            //       ),
            //     ],
            //   ),
            // ),
            // テキスト情報
            Padding(
              padding: const EdgeInsets.fromLTRB(16, 12, 16, 16),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    facility.name,
                    style: theme.textTheme.titleMedium,
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                  ),
                  const SizedBox(height: 4),
                  Text(
                    facility.prefecture,
                    style: theme.textTheme.bodySmall,
                  ),
                  Text(
                    facility.city,
                    style: theme.textTheme.bodySmall,
                  ),
                  Text(
                    facility.sportsType,
                    style: theme.textTheme.bodySmall,
                  ),
                  Text(
                    dateStr,
                    style: theme.textTheme.bodySmall,
                  ),
                  Text(
                    startStr,
                    style: theme.textTheme.bodySmall,
                  ),
                  Text(
                    endStr,
                    style: theme.textTheme.bodySmall,
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
