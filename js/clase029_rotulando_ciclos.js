for_principal:
    for (var i = 1; i <= 6; i++) {
        console.error("==================");

        console.log("i =", i);

        for_secundario:
            for (var b = 1; b <= 6; b++) {
                console.log("b =", b);

                for (var x = 1; x <= 6; x++) {
                    console.log("x =", x);

                    break for_secundario;
                }
            }
    }