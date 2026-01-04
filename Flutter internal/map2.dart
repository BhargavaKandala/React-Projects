//Implement navigation with named routes (without widgets
import 'package:flutter/material.dart';

void main() {
    runApp(
        MaterialApp(
            debugShowCheckedModeBanner: false,
            initialRoute: '/',
            routes: {
                '/': (context) => Scaffold(
                            appBar: AppBar(title: const Text('Home')),
                            body: Center(
                                child: Column(
                                    mainAxisSize: MainAxisSize.min,
                                    children: [
                                        const Text('Home Screen'),
                                        const SizedBox(height: 12),
                                        ElevatedButton(
                                            onPressed: () => Navigator.pushNamed(context, '/second'),
                                            child: const Text('Go to Second Screen'),
                                        ),
                                    ],
                                ),
                            ),
                        ),
                '/second': (context) => Scaffold(
                            appBar: AppBar(title: const Text('Second')),
                            body: Center(
                                child: Column(
                                    mainAxisSize: MainAxisSize.min,
                                    children: [
                                        const Text('Second Screen'),
                                        const SizedBox(height: 12),
                                        ElevatedButton(
                                            onPressed: () => Navigator.pop(context),
                                            child: const Text('Back to Home'),
                                        ),
                                    ],
                                ),
                            ),
                        ),
            },
        ),
    );
}
import 'package:flutter/material.dart'

void