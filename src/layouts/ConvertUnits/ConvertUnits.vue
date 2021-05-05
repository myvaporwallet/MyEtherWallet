<template>
  <div class="convert-units">
    <div class="wrap">

      <div class="page-container">
        <div class="page-title">
          <h2>Convert Units</h2>
          <p>
            MyVaporWallet is comprised of talented, inspiring, and hardworking
            individuals from around the world. We share the passion to code.
          </p>
        </div>

        <div>
          <unit-input :options="options" />
        </div>

        <div class="vapor-unit-reference-guide">
          <div class="block-title">
            <h3>Vapor Unit Reference Guide</h3>
          </div>

          <div class="unit-table">
            <table>
              <tbody>
                <tr
                  v-for="eu in vaporUnitRef"
                  :key="eu.key">
                  <td>{{ eu.name }}</td>
                  <td>{{ eu.unit1 }}</td>
                  <td>{{ eu.unit2 }}<span>{{ eu.unit2e }}</span></td>
                  <td>{{ eu.desc }}</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
import UnitInput from './components/UnitInput';

export default {
  components: {
    'unit-input': UnitInput
  },
  data() {
    return {
      vaporUnitRef: [
        {
          name: 'Wei',
          unit1: '1',
          unit2: '1',
          unit2e: '',
          desc: ''
        },
        {
          name: 'Kwei',
          unit1: '1,000',
          unit2: '10',
          unit2e: '3',
          desc: 'ada, femtovapor'
        },
        {
          name: 'Mwei',
          unit1: '1,000,000',
          unit2: '10',
          unit2e: '6',
          desc: 'babbage, picovapor'
        },
        {
          name: 'Gwei',
          unit1: '1,000,000,000',
          unit2: '10',
          unit2e: '9',
          desc: 'shannon, nanovapor, nano'
        },
        {
          name: 'Szabo',
          unit1: '1,000,000,000,000',
          unit2: '10',
          unit2e: '12',
          desc: 'microvapor, micro'
        },
        {
          name: 'Finney',
          unit1: '1,000,000,000,000,000',
          unit2: '10',
          unit2e: '15',
          desc: 'millivapor, milli'
        },
        {
          name: 'Vapor',
          unit1: '1,000,000,000,000,000,000',
          unit2: '10',
          unit2e: '18',
          desc: ''
        },
        {
          name: 'Kvapor',
          unit1: '1,000,000,000,000,000,000,000',
          unit2: '10',
          unit2e: '21',
          desc: 'grand, einstein'
        },
        {
          name: 'Mvapor',
          unit1: '1,000,000,000,000,000,000,000,000',
          unit2: '10',
          unit2e: '24',
          desc: ''
        },
        {
          name: 'Gvapor',
          unit1: '1,000,000,000,000,000,000,000,000,000',
          unit2: '10',
          unit2e: '27',
          desc: ''
        },
        {
          name: 'Tvapor',
          unit1: '1,000,000,000,000,000,000,000,000,000,000',
          unit2: '10',
          unit2e: '30',
          desc: ''
        }
      ],
      options: [
        'wei',
        'kwei',
        'mwei',
        'gwei',
        'szabo',
        'finney',
        'vapor',
        'kvapor',
        'mvapor',
        'gvapor',
        'tvapor'
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import 'ConvertUnits.scss';
</style>
