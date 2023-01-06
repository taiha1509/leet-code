function lcm(a, b): number {
    const c = a * b;
    while (b) {
        let tmp = 0;
        if (a > b) {
            tmp = b;
            b = a
            a = a % b;
        } else {
            tmp = a;
            a = b;
            b = b % a;
        }
    }
    return c / a;
}