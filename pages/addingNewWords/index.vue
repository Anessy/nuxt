<template>
  <div>
    <v-text-field
    v-model="userWord">
      <v-icon
        style="color: forestgreen"
        slot="prepend">
        mdi-plus
      </v-icon>
    </v-text-field>
    <div @click="addTheWord">
      <agreeBtn
        buttonName="Додати картку до словника"
      ></agreeBtn>
    </div>
    <div v-if="whatPartOfSpeechInputs && userWord != ''">
      <p>Оберіть яка це частина мови</p>
      <v-container
        class="px-0"
        fluid>
        <v-checkbox
          class="displayInline"
          v-model="isNoun"
          label="Іменник(Хто? Що?)"
          @click="choosePartOfWord('isNoun')"
        ></v-checkbox>
        <v-checkbox
          class="displayInline"
          v-model="isAdjective"
          label="Прикметник(Який?)"
          @click="choosePartOfWord('isAdjective')"
        ></v-checkbox>
        <v-checkbox
          class="displayInline"
          v-model="isVerb"
          label="Дієслово(Що робить?)"
          @click="choosePartOfWord('isVerb')"
        ></v-checkbox>
        <v-checkbox
          class="displayInline"
          v-model="isOther"
          label="Інше"
          @click="choosePartOfWord('isOther')"
        ></v-checkbox>
      </v-container>
    </div>
    <div class="card"></div>
    <div v-if="userWord != ''">
      <v-card
        class="mx-auto"
        max-width="344"
        outlined
      >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4">
              <h2>{{userWord}}</h2>
            </div>
            <v-list-item-title class="text-h5 mb-1">
              {{ isAdjective ? 'Прикметник / Das Adjektiv' : isNoun ? 'Іменник / Das Substantiv' : isVerb ? 'Дієслово / Das Verb' : ''}}
            </v-list-item-title>
            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar
            tile
            size="80"
            color="grey"
          ></v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
          <v-btn
            outlined
            rounded
            text>
            Button
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
import agreeBtn from "~/components/buttons/agreeBtn";
import {mapActions} from 'vuex';
import dictionaryDB from './../../assets/db/dictionary.json';

export default {
  name: 'addingNewWords',
  components: {
    agreeBtn
  },
  data() {
    return {
      dataFromDictionary : {},
      userWord: '',
      dictionary: dictionaryDB,
      whatPartOfSpeechInputs: false,
      isNoun: false,
      isAdjective: false,
      isVerb: false,
      isOther: true
    }
  },
  methods: {
    ...mapActions({
      checkTheWordInDictionary: 'checkTheWordInDictionary'
    }),
    async checkTheWord() {
      debugger
      try {
        this.dataFromDictionary = await this.checkTheWordInDictionary(this.userWord);
      } catch (err) {
        console.log('checkTheWordInDictionary ERROR')
      }
      debugger
      console.log(this.dataFromDictionary)
    },
    addTheWord () {
      debugger
      this.whatPartOfSpeechInputs = true;
      console.log(this.dictionary)
    },
    choosePartOfWord(part){
        if ( part === 'isNoun') {
          this.isAdjective = false;
            this.isVerb = false;
            this.isOther = false;
        }
       if(part === 'isAdjective') {
         this.isNoun = false;
           this.isVerb = false;
           this.isOther = false;
       }

       if(part === 'isVerb') {
         this.isNoun = false;
           this.isAdjective = false;
           this.isOther = false;
       }

       if (part === 'isOther') {
         this.isNoun =  false;
           this.isAdjective =  false;
           this.isVerb =  false;
       }
    }
  }
}
</script>

<style scoped>
.displayInline {
  display: inline-block;
  margin-right: 10px;
}
</style>
