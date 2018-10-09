<template>
  <div class="event-card">
    <v-layout row wrap>
      <v-flex xs2>
        <svg width="61" height="74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <defs>
            <path id="a" d="M9 31h34v42l-17-5.101L9 73z" />
            <filter x="-20.6%" y="-16.7%" width="141.2%" height="133.3%" filterUnits="objectBoundingBox" id="b">
              <feOffset dx="-14" dy="8" in="SourceAlpha" result="shadowOffsetInner1" />
              <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1" />
              <feColorMatrix values="0 0 0 0 0.392156863 0 0 0 0 0.68627451 0 0 0 0 1 0 0 0 1 0" in="shadowInnerInner1"
                result="shadowMatrixInner1" />
              <feOffset dx="14" in="SourceAlpha" result="shadowOffsetInner2" />
              <feComposite in="shadowOffsetInner2" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner2" />
              <feColorMatrix values="0 0 0 0 0.392156863 0 0 0 0 0.68627451 0 0 0 0 1 0 0 0 1 0" in="shadowInnerInner2"
                result="shadowMatrixInner2" />
              <feMerge>
                <feMergeNode in="shadowMatrixInner1" />
                <feMergeNode in="shadowMatrixInner2" />
              </feMerge>
            </filter>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="e">
              <stop stop-color="#FF7878" offset="0%" />
              <stop stop-color="#FF4F4F" offset="100%" />
            </linearGradient>
            <circle id="d" cx="25.5" cy="25.5" r="25.5" />
            <filter x="-18.6%" y="-10.8%" width="137.3%" height="137.3%" filterUnits="objectBoundingBox" id="c">
              <feOffset dy="4" in="SourceAlpha" result="shadowOffsetOuter1" />
              <feGaussianBlur stdDeviation="2.5" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
              <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.200775589 0" in="shadowBlurOuter1" />
            </filter>
          </defs>
          <g fill="none" fill-rule="evenodd">
            <g transform="translate(5 1)">
              <use fill="#D6EBF5" xlink:href="#a" />
              <use fill="#000" filter="url(#b)" xlink:href="#a" />
            </g>
            <g transform="translate(5 1)">
              <use fill="#000" filter="url(#c)" xlink:href="#d" />
              <circle :stroke="userRankFill" stroke-width="6.75" stroke-linejoin="square" fill="url(#e)" cx="25.5" cy="25.5"
                r="22.125" />
            </g>
            <text font-family="Avenir-Black, Avenir" font-size="20" font-weight="700" fill="#FFF" transform="translate(5 1)">
              <tspan x="19.58" y="33">{{userRank}}</tspan>
            </text>
          </g>
        </svg>
      </v-flex>

      <v-flex xs9 class="banner">
        <span class="event-name">{{contest.name}}</span> <br>
        <span class="event-type">{{contest.type}} | </span>
        <span class="time">
          <v-icon small style="color: #FF6868">alarm</v-icon> {{contest.endDate}}
        </span>
      </v-flex>

      <v-flex xs1>
        <svg width="18" height="4" xmlns="http://www.w3.org/2000/svg">
          <g fill="#000000" fill-rule="evenodd" opacity=".295">
            <ellipse cx="1.75" cy="2" rx="1.75" ry="2" />
            <ellipse cx="9" cy="2" rx="1.75" ry="2" />
            <path d="M16.25 4C17.216 4 18 3.105 18 2s-.784-2-1.75-2c-.644 0-1.228.667-1.75 2 .522 1.333 1.106 2 1.75 2z" />
          </g>
        </svg>
      </v-flex>

    </v-layout>
    <v-expansion-panel>
      <v-expansion-panel-content>
        <div slot="header">Current Rank</div>
        <v-card>
          <v-card-text class="event-card-padding">
            <v-data-table v-model="panel" expand hide-headers :items="contest.members" hide-actions>
              <template slot="items" slot-scope="props">
                <tr :class="props.item.class">
                  <td width="5%" class="text-xs-left">{{ props.item.rankOrd }}</td>
                  <td width="90%" class="text-xs-center">{{ props.item.name }}</td>
                  <td width="5%" class="text-xs-right">{{ props.item.valueOrd }}</td>
                </tr>
              </template>
              <template slot="footer">
                <td colspan="100%" class="text-xs-center">
                  <strong><a href="http://www.google.com">View All</a></strong>
                </td>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </div>
</template>

<script>
  /*eslint-disable*/

 export default {
    name: 'dashboard',
    data: () => ({
        panel: [true], // Leave expansion-panel open when selecting another
        user: 'Matt Snell',
        userRank: 3, //userRank should equal the contest.members.rank of that same user. 
        userRankFill: '#F7B32F', //Gold: #FFD400, Silver: #D6D6D6, Bronze: #F7B32F, Other: #D6EBF5
        contest: {
          name: 'Rookie Rumble',
          type: 'Group Contest',
          endDate: 'Oct 1st, 2018',
          daysRemaining: 10,
          members: [{
            name: 'Zac Gragg',
            rank: 1,
            rankOrd: '1st',
            value: 12500,
            valueOrd: '$12,500',
            class: 'firstplace'
          },
          {
            name: 'Matt Snell',
            rank: 2,
            rankOrd: '2nd',
            value: 10000,
            valueOrd: '$10,000',
            class: ''
          },
          {
            name: 'David Smith',
            rank: 3,
            rankOrd: '3rd',
            value: 8000,
            valueOrd: '$8,000',
            class: 'highlight' //highlight class is assigned by checking if the logged in user matches the member
          },
          {
            name: 'Rod Castor',
            rank: 4,
            rankOrd: '4th',
            value: 7000,
            valueOrd: '$7,000',
            class: ''
          }]
        },
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
    })
  }
</script>
<style type="text/css">

a {
  text-decoration: none;
  color: inherit;
}

.flex.Ribbon {
    flex-basis: 12%;
    flex-grow: 0;
    max-width: 12%;
  }

.banner {
  margin-top: 20px;
}

.v-card__text.event-card-padding {
  padding: 0;
}

.v-expansion-panel__header {
  background: #5697fc;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  line-height: 27px;
  text-align: left;
  text-transform: none;
  letter-spacing: 0px;
  box-shadow: none;
  border-radius: 3px;
}

.v-expansion-panel {
  box-shadow: none;
}

.v-expansion-panel__header__icon {
  color: #fff;
}

.event-card {
  background: #FFFFFF;
  border-radius: 2px 2px 0 0;
  padding: 10px;
}

table.v-table tfoot tr {
  height: 30px;
  color: #5697FC;
  font-weight: 700;
  font-size: 12px;
  border: none;
}

table.v-table tbody {
  box-shadow: none;
}

table.v-table tbody td,
table.v-table tbody th,
table.v-table thead {
  height: 30px;
}

table.v-table thead tr {
  height: 30px;
}

table.v-table tbody tr {
  border: 0px;
}

table.v-table tbody tr:first-child,
table.v-table tbody tr:last-child {
  border: 1px;
  border-width: 0px 0px 1px 0px;
  border-style: solid;
  border-color: rgba(245, 166, 35, 0.34);
  box-shadow: none;
}

table.v-table tbody tr.firstplace td:first-child {
  border-radius: 0;
  font-weight: 700;
  font-size: 14px;
  color: #4A4A4A;
}

table.v-table tbody tr.firstplace td:nth-child(2) {
  font-size: 14px;
  font-weight: 700;
  color: #757575;
  text-align: center;
  line-height: 16px;
}

table.v-table tbody tr.firstplace td:nth-child(3) {
  font-size: 14px;
  font-weight: 700;
  color: #5171F6;
  text-align: center;
  line-height: 16px;
}

table.v-table tbody td:first-child {
  font-size: 12px;
  color: #4A4A4A;
  font-weight: 700;
  text-align: center;
}

table.v-table tbody tr:not(:first-child) td:not(:first-child) {
  font-size: 12px;
  font-weight: 700;
  color: #757575;
  text-align: center;
  line-height: 16px;
}

.highlight td {
  color: #fff !important;
  background: #F7B32F;
  font-weight: 700 !important;
}

@media screen and (max-width : 1024px) {}

/* Event Header Info */


/* TODO: The time should only be red if within certain time remaining */
.time {
  font-size: 11px;
  color: #FF6868;
}

.event-name {
font-size: 24px;
color: #4A4A4A;
line-height: 20px;
}

.event-type {
font-size: 14px;
color: rgb(129, 130, 131);
}
</style>