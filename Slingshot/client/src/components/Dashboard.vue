<template>
  <v-app>
    <v-container fluid grid-list-lg>
      <v-layout row wrap style="height: 100%;">
        <v-flex xs12 sm6 md3>
          <div id="user" class="profile-bg dash-cards">
            <div style="padding-top: 40px">
              <img :src="user.pic" alt="avatar" class="user-avatar">
              <v-card-text class="user-name">{{user.name}}</v-card-text>
              <p id="jobtitle">{{user.title}}</p>
            </div>
            <v-tabs centered icons-and-text>
              <v-tabs-slider color="blue lighten-4"></v-tabs-slider>

              <v-tab href="#news-feed">
                News Feed
                <img src="https://png.icons8.com/plasticine/30/000000/news.png" style="padding-bottom: 5px; margin-top: 5px;">
              </v-tab>

              <v-tab href="#trophy-case">
                Trophy Case
                <img src="https://png.icons8.com/plasticine/40/000000/uefa-euro-trophy.png">
              </v-tab>

              <v-tab-item id="news-feed">
                <v-card flat>
                  <v-card-text>{{ lorem }}</v-card-text>
                </v-card>
              </v-tab-item>

              <v-tab-item id="trophy-case">
                <v-card flat>
                  <v-card-text>{{ lorem }}</v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs>
          </div>
        </v-flex>

        <v-flex d-flex xs12 sm6 md5>
          <v-layout row wrap>
            <v-flex>
              <h5 id="headers">Goals</h5>
              <v-card id="goals" class="dash-cards">
                <v-card-text>{{lorem}}</v-card-text>
                <div style="position: block;">
                  <v-btn small outline dark color="teal" style="right: 0; bottom: 0; position: absolute;" @click="dialog = !dialog">
                    New Goal
                  </v-btn>
                </div>
              </v-card>
            </v-flex>

            <v-flex>
              <h5 id="headers">Announcements</h5>
              <v-card id="news" class="dash-cards">
                <v-card-text>{{lorem}}</v-card-text>
              </v-card>
            </v-flex>

          </v-layout>
        </v-flex>
        <v-flex xs12 sm6 md4>
          <h5 id="headers">Events</h5>
          <v-card id="events" class="dash-cards">
            <v-card-text>
              <events></events>
            </v-card-text>
            <div style="position: block;">
              <v-btn small outline dark color="teal" style="right: 0; bottom: 0; position: absolute;">
                New Event
              </v-btn>
            </div>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-text>
          <v-text-field label="File name"></v-text-field>
          <small class="grey--text">Testing</small>
        </v-card-text>
        <v-card-actions>
          <v-btn flat color="primary" @click.native="dialog = false">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
  /*eslint-disable*/

import Events from '@/components/Events'

 export default {
    name: 'dashboard',
    data: () => ({
      dialog: false,
      user: {
        name: 'Kyle Clarke',
        title: 'Senior Manager',
        pic: 'https://www.w3schools.com/howto/img_avatar.png'
      },
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
    }),
    components: {
      Events
    }
  }
</script>
<style type="text/css">
  @media screen and (max-width : 1024px) {
    .v-tabs__container--fixed-tabs .v-tabs__div,
    .v-tabs__container--icons-and-text .v-tabs__div,
    .v-tabs {
      font-size: 12px;
      min-width: 10px;
    }
  }

  @media screen and (max-width : 1920px) {
    .v-tabs__container--fixed-tabs .v-tabs__div,
    .v-tabs__container--icons-and-text .v-tabs__div,
    .v-tabs {
      font-size: 14px;
      min-width: 10px;
    }
  }

  .v-tabs__div {
    text-transform: none;
  }

  .v-tabs__container {
    width: 50%;
  }

  .v-expansion-panel__header__icon {
    color: #fff;
  }

  .block {
    display: block;
    width: 100%;
    border: none;
    background-color: #83d497;
    color: #fff;
    cursor: pointer;
    position: absolute;
    bottom: 0;
  }

  .dash-cards {

    box-shadow: -11px 9px 21px 0px rgba(173, 182, 217, 0.17);
    box-shadow: -2px 5px 6px 0px rgba(214, 217, 231, 0.29);
  }

  .profile-bg {
    background: url("https://i.imgur.com/yDMGMHT.png") no-repeat center top;
    background-size: 100% auto;
  }

  .user-avatar {
    width: 40%;
    margin: auto;
    display: block;
    border-radius: 50%
  }

  .user-name {
    color: #4a4a4a;
    font-size: 1.2em;
    font-style: normal;
    font-stretch: normal;
    font-weight: 800;
    line-height: 24px;
    text-align: center;
    text-transform: none;
    letter-spacing: 0px;
    padding-bottom: 5px;
  }

  #user {
    height: calc(100% + 15px);
    background-color: #fff;
    border-radius: 4px;
  }

  #goals,
  #news,
  #events {
    height: calc(100% - 40px);
    margin-top: 40px;
    overflow-y: auto;
    overflow-x: hidden;
    background: rgba(255, 255, 255, .6);
    border-radius: 4px;
    box-shadow: -11px 9px 21px 0 rgba(173, 182, 217, 0.17);
  }

  h5#headers {
    margin-bottom: -30px;
    color: #4a4a4a;
    font-size: 22px;
    font-style: normal;
    font-stretch: normal;
    font-weight: 400;
    line-height: 29px;
    text-transform: none;
    letter-spacing: 0px;
  }

  p#jobtitle {
    color: #757575;
    padding: 0;
    font-size: 1em;
    font-style: normal;
    font-stretch: normal;
    font-weight: 400;
    line-height: 19px;
    text-align: center;
    text-transform: none;
    letter-spacing: 0px;
  }
</style>