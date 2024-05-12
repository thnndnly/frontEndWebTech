class pokerGameEntry {
    date: string;
    type: string;
    sb: number;
    bb: number;
    buyin: number;
    cashout: number;

    constructor(date: string, type: string, sb: number, bb: number, buyin: number, cashout: number) {
        this.date = date;
        this.type = type;
        this.sb = sb;
        this.bb = bb;
        this.buyin = buyin;
        this.cashout = cashout;
    }
};