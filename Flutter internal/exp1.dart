import 'package:flutter/material.dart';

void main() => runApp(
  MaterialApp(
    title: 'Navigator',
    initialRoute: '/',
    routes: {
      '/': (ctx) => Scaffold(
            appBar: AppBar(title: const Text('Home')),
            body: Center(
              child: ElevatedButton(
                onPressed: () => Navigator.pushNamed(ctx, '/second'),
                child: const Text('Open Second Screen'),
              ),
            ),
          ),
      '/second': (ctx) => Scaffold(
            appBar: AppBar(title: const Text('Second')),
            body: Center(
              child: ElevatedButton(
                onPressed: () => Navigator.pop(ctx),
                child: const Text('Go Back'),
              ),
            ),
          ),
    },
  ),
);