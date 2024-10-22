<template>
  <article>
    <div>
      <h3 class="section-title">Schedule</h3>
      <table class="center">
        <tr><th>Time</th><th>Event</th></tr>
        <tr class="content-section" v-for="(item,index) in schedule" :key="index">
          <td>{{item.time}}</td>
          <td>
            <div v-if="item.speaker">
                <b>{{item.speaker}}</b>
            </div>
            {{item.event}}
        </td>
        </tr>
      </table>
    </div>
  </article>
</template>
<script>
export default {
  name: 'schedule',
  data() {
    return {
    }
  },
  components: {
  },
  props: ['schedule', 'linkTalks']
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  article {
    display: flex;
    flex-direction: column;
    max-width: 90%;
    margin-top: 1em;
    margin-bottom: 1em;
    padding: 1.5em 0.8em 1.5em 0.8em;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    background-color: #fafafa;
  }
  .center {
    margin-left: auto;
    margin-right: auto;
  }
  table {
    margin-bottom: 30px;
    /* width: 100%; */
    text-align: left;
    color: #3f3f3f;
    border-collapse: collapse;
    border: 1px solid #e8e8e8
  }
  table tr:nth-child(even) {
    background-color: #f7f7f7
  }
  table th,table td {
    padding: 10px 15px
  }
  table th {
    background-color: #f0f0f0;
    border: 1px solid #dedede;
    border-bottom-color: #c9c9c9
  }
  table td {
    border: 1px solid #e8e8e8
  }
  .section-title {
    font-weight: 700;
    padding-top: 2em;
    border-bottom: solid 5px var(--text-color);
    display: inline-block;
    font-size: 1.6em;
    letter-spacing: 0.2rem;
  }
  .content-section {
    margin-bottom: 1em;
  }
 </style>
