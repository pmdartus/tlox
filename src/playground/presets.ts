interface Preset {
    name: string,
    value: string, 
}

export const presets: Preset[] = [
    {
        name: 'Hello world!',
        value: `print "Hello World!";`,
    },
    {
        name: 'Expressions',
        value: (
`var avg = (5 + 7) / 2;
print "Average: " + avg;
`
        )
    },
    {
        name: 'Flow Control',
        value: (
`var condition = true;
if (condition) {
    print "yes";
} else {
    print "no";
}

var a = 1;
while (a < 10) {
    print a;
    a = a + 1;
}

for (var a = 1; a < 10; a = a + 1) {
    print a;
}
`
        )
    },
    {
        name: 'Function',
        value: (
`fun fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 2) + fibonacci(n - 1);
}

for (var i = 0; i < 10; i = i + 1) {
    print fibonacci(i);
}

fun makeClosure() {
    var i = 0;
    fun count() {
        i = i + 1;
        print i;
    }

  return count;
}

var counter = makeClosure();
for (var i = 0; i < 10; i = i + 1) {
    print counter();
}

fun times(n, fn) {
    for (var i = 0; i < n; i = i + 1) {
        fn(n);
    }
}

times(fn (n) {
    print n;
})
`
        )
    },
    {
        name: 'Classes',
        value: (
`// Todo
`
        )
    }
]