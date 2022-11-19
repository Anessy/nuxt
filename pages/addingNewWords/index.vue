<template>
  <div>

    <v-text-field
      v-model="userWord"
      class="input"
      label="Введіть слово або вираз">
    </v-text-field>
    <div @click="addTheWord" style="display: inline-block">
      <agreeBtn
        class="button"
        buttonName="Додати картку до словника">
      </agreeBtn>
    </div>

    <div v-if="whatPartOfSpeechInputs && userWord != ''"
         style="margin-top: 15px">
      <h3>Оберіть яка це частина мови</h3>
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
    <div v-if="userWord != '' && isNoun">
      <h3>Оберіть правильний артикль</h3>
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header>
            Правила визначення роду в німецькій мові
          </v-expansion-panel-header>
          <v-expansion-panel-content>

            <v-expansion-panels style="margin-bottom: 10px">
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <h4>Чоловічий рід</h4>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <p>- Особи чоловічої статі</p>
                  <p>- Дні тижня, місяці, пори року, частини доби</p>
                  <p>- Сторони світу</p>
                  <p>- Назви вітрів, опадів</p>
                  <p>- Назви мінералів, каміння</p>
                  <p>- Марки авто, алкоголю, валют</p>
                  <p>- Назви окремих гір (не гряда)</p>
                  <p>- Назви планет, зірок, сузірїв</p>
                  <p style="text-decoration: underline">Слова, що мають суфікси:</p>
                  <p>ich / ig / ling</p>
                  <p>or / är / iker</p>
                  <p>ant / ast / ent / ist</p>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
            <v-expansion-panels style="margin-bottom: 10px">
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <h4>Жіночий рід</h4>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <p>- Особи жіночої статі</p>
                  <p>- Назви кораблів, літаків</p>
                  <p>- Назви дерев, квітів</p>
                  <p>- Назви, фруктів, ягід, овочів</p>
                  <p>- Назви німецьких річок</p>
                  <p style="text-decoration: underline">Слова, що мають суфікси:</p>
                  <p>ei / keit / heit</p>
                  <p>ing / ung / a</p>
                  <p>ade / age / tion / fät / schaft</p>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
            <v-expansion-panels style="margin-bottom: 10px">
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <h4>Середній рід</h4>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <p>- Назви дитинчат</p>
                  <p>- Назви хімічних елементів</p>
                  <p>- Кінотеатри, готелі, театри, кавярні, кафе</p>
                  <p>- Назви букв, мов</p>
                  <p>- Миючі та пральні засоби</p>
                  <p>- Континенти, країни, міста</p>
                  <p style="text-decoration: underline">Слова, що мають суфікси:</p>
                  <p>chen / lein </p>
                  <p>tel / viertel </p>
                  <p>um / tum / ment </p>
                  <p>o / ge ... e </p>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>

          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <v-container
        class="px-0"
        fluid>
        <v-checkbox
          class="displayInline"
          v-model="isDer"
          label="Der( Herr, ч.р.)"
          @click="choosePartOfWord('isDer')"
        ></v-checkbox>
        <v-checkbox
          class="displayInline"
          v-model="isDie"
          label="Die (Frau, ж.р.)"
          @click="choosePartOfWord('isDie')"
        ></v-checkbox>
        <v-checkbox
          class="displayInline"
          v-model="isDas"
          label="Das (Das, с.р.)"
          @click="choosePartOfWord('isDas')"
        ></v-checkbox>
      </v-container>
    </div>
    <div class="card"></div>
    <div v-if="userWord != ''">
      <h3 style="margin-bottom: 10px; margin-top: 20px">Передогляд картки</h3>
      <v-card
        class="mx-auto"
        max-width="344"
        outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4">
              <h2>{{isDer && isNoun ? 'der '+ userWord : isDie && isNoun? 'die '+ userWord : isDas && isNoun ? 'das ' + userWord : userWord }}</h2>
            </div>
            <v-list-item-title class="text-h5 mb-1">
              {{ isAdjective ? 'Прикметник / Das Adjektiv' : isNoun ? 'Іменник / Das Substantiv' : isVerb ? 'Дієслово / Das Verb' : '' }}
            </v-list-item-title>
            <v-list-item-subtitle v-if="isNoun">
              <p v-if="isDie">Feminines Geschlecht / Жіночий рід</p>
              <p v-if="isDer">Männliches Geschlecht / Чоловічий рід</p>
              <p v-if="isDas">Neutrales Geschlecht / Середній рід</p>
            </v-list-item-subtitle>
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
      dataFromDictionary: {},
      userWord: '',
      dictionary: dictionaryDB,
      whatPartOfSpeechInputs: false,
      isNoun: false,
      isAdjective: false,
      isVerb: false,
      isOther: true,
      isDer: true,
      isDie: false,
      isDas: false
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
    addTheWord() {
      debugger
      this.whatPartOfSpeechInputs = true;
      console.log(this.dictionary)
    },
    choosePartOfWord(part) {
      if (part === 'isNoun') {
        this.isAdjective = false;
        this.isVerb = false;
        this.isOther = false;
      }
      if (part === 'isAdjective') {
        this.isNoun = false;
        this.isVerb = false;
        this.isOther = false;
      }

      if (part === 'isVerb') {
        this.isNoun = false;
        this.isAdjective = false;
        this.isOther = false;
      }

      if (part === 'isOther') {
        this.isNoun = false;
        this.isAdjective = false;
        this.isVerb = false;
      }

      if (part === 'isDer') {
        this.isDas = false;
        this.isDie = false;
      }

      if (part === 'isDie') {
        this.isDas = false;
        this.isDer = false;
      }

      if (part === 'isDas') {
        this.isDer = false;
        this.isDie = false;
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

.input {
  width: 400px;
  margin: 10px 30px 10px 0px;
  display: inline-block;
}

.button {
  margin-bottom: 10px;
}
</style>
