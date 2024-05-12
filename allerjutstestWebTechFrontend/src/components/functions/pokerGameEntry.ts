class pokerGameEntry {
    id: number;
    date: string;
    type: string;
    sb: number;
    bb: number;
    buyin: number;
    cashout: number;

    constructor(id: number, date: string, type: string, sb: number, bb: number, buyin: number, cashout: number) {
        this.id = id;
        this.date = date;
        this.type = type;
        this.sb = sb;
        this.bb = bb;
        this.buyin = buyin;
        this.cashout = cashout;
    }
};