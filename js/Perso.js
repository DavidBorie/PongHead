class Perso extends ElementHtml{
    constructor($html) {
        super($html);
        this.$bulle=$html.find(".bulle");
        this.mots=[
            "Votre cafetière de grand-père est plus fort que vous"
            ,"Le 1er qui marque, aura un contrat"
            ,"Yallop!"
            ,"..."
            ,"Elle est ou Ms. Chalice"
            ,"j'commence à avoir mal à force de bouger"
            ,"King dice, on se fait un poker?"
            ,"J'ai une p'tite soif"
            ,"Nul germain!"
        ];
    }
    parle(blabla){
        let ici=this;
        this.$bulle.text(blabla);
        setTimeout(function(){
            ici.$bulle.text("");
        },1500);
    }

    /**
     * Renvoie un mot aléatoire
     * @returns {string}
     */
    get motAleatoire(){
        return this.mots[Math.floor(Math.random() * this.mots.length)];
    }

}
