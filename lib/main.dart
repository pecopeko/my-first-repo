import 'package:flutter/material.dart';
import 'widgets/facilityList.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Supabase.initialize(
    url: 'https://glpnlarhekitkrebnxmn.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdscG5sYXJoZWtpdGtyZWJueG1uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU5MDkzMzMsImV4cCI6MjA2MTQ4NTMzM30.BCd83hU3oh96tCDdHK3mX7I7R02wQ9vWRINFSoXWYCY',
  );
  runApp(const SportsSlotsApp());
}

class SportsSlotsApp extends StatelessWidget {
  const SportsSlotsApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Sports Slots',
      theme: ThemeData(
        useMaterial3: true,
        colorScheme: ColorScheme.light(
      surface: Colors.white,
    ),
    scaffoldBackgroundColor: Colors.white,
    canvasColor: Colors.white,
  ),
      home: const HomePage(),
    );
  }
}

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> with TickerProviderStateMixin {
  late final TabController _tab;

  // 今日は 0、明日 1 … 7 日分だけ作る
  static const _daysToShow = 21;

  @override
  void initState() {
    super.initState();
    _tab = TabController(length: _daysToShow, vsync: this);
  }

  @override
  void dispose() {
    _tab.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: NestedScrollView(
        headerSliverBuilder: (_, __) => [
          SliverAppBar(
  pinned: true,
  surfaceTintColor: Colors.transparent,
  backgroundColor: Colors.white,
  forceElevated: true,
  expandedHeight: 56,
  title: const Text('空き状況を探す'),
  bottom: PreferredSize(
    preferredSize: const Size.fromHeight(48 + 8), // TabBarの高さ + 余白の高さ
    child: Column(
      children: [
        TabBar(
          controller: _tab,
          padding: const EdgeInsets.only(bottom: 12),
          isScrollable: true,
          indicator: BoxDecoration(
            color: Colors.deepPurple[100],
            borderRadius: BorderRadius.circular(8),
          ),
          indicatorSize: TabBarIndicatorSize.tab,
          labelColor: Colors.black,
          unselectedLabelColor: Colors.black,
          tabs: List.generate(
            _daysToShow,
            (i) {
              final date = DateTime.now().add(Duration(days: i));
              final label =
                  '${date.month}/${date.day}(${_weekday(date.weekday)})';
              return Tab(text: label);
            },
          ),
        ),
      ],
    ),
  ),
),
        ],
        body: TabBarView(
          controller: _tab,
          physics: const NeverScrollableScrollPhysics(), // scrollFalse
            children: List.generate(
              _daysToShow,
              (i) => FacilityGrid(date: DateTime.now().add(Duration(days: i))),
            ),
        ),
      ),
    );
  }

  String _weekday(int w) => const ['月', '火', '水', '木', '金', '土', '日'][w - 1];
}
