new Vue({
    el: '#budgetCards', 
    data: {
        hidden: true,
        budgets: [
            {
            name: "Test",
            target: "80000",
            transactions: [
            {
            description: "APPLE PAY - SENT M 01-31 877-233-8552 CA 1269 DEBIT CARD PURCHASE",
            amount: 2031
            },
            {
            description: "APPLE PAY - SENT M 01-31 877-233-8552 CA 1269 DEBIT CARD PURCHASE",
            amount: 12781
            },
            {
            description: "WEGMANS CHARLOTTES #127",
            amount: 4528
            },
            {
            description: "TRADER JOE'S #661 QPS",
            amount: 2042
            }
            ]
            },
            {
            name: "Rent",
            target: "200000",
            transactions: [
            {
            description: "Check # 1221",
            amount: 20000
            }
            ]
            },
            {
            name: "Utilities",
            target: "30000",
            transactions: [
            {
            description: "ONLINE PMT DOMINION VA POWE 5NEG ACH DEBIT",
            amount: 14700
            },
            {
            description: "COMCAST",
            amount: 7700
            },
            {
            description: "CITY OF CHARLOTTESVILLE",
            amount: 17622
            }
            ]
            },
            {
            name: "Healthcare",
            target: "30000",
            transactions: [
            {
            description: "CVS/PHARMACY #01551",
            amount: 319
            },
            {
            description: "UVA HS MY CHART",
            amount: 20244
            }
            ]
            },
            {
            name: "Entertainment",
            target: "20000",
            transactions: [
            {
            description: "Netflix.com 02-26 netflix.com CA 3284 DEBIT CARD RECURRING PYMT",
            amount: 1099
            },
            {
            description: "Regal Cinema 8810-2 EMIT ST PURCHASE",
            amount: 1099
            },
            {
            description: "TIN WHISTLE IRISH PUB 001-22 HIGH ST - PURCHASE",
            amount: 4517
            },
            {
            description: "GUADALAJARA MEXICAN REST",
            amount: 5000
            }
            ]
            }
            ],
    },
    methods: {
        transactionTotal(transactions) {
            let total =  0;
            transactions.forEach(transaction => {
                total += transaction.amount
            });
            return total;
        },
        centsToDollars(cents) {
            let dollars = cents / 100;
            let formatedDollars = dollars.toLocaleString("en-US", {style:"currency", currency:"USD"})
            return formatedDollars;
        },
        percentBudget(spent, budget) {
            return `${Math.round((spent / budget) * 100)}%`
        },
        budgetBarWidth(spent, budget) {
            if (budget > spent) {
                return `${Math.round((spent / budget) * 100)}%`;
            } else { return "100%"}
        },
    }
});
