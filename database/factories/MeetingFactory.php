<?php

namespace Database\Factories;

use App\Models\Agenda;
use App\Models\Meeting;
use App\Models\MeetingType;
use App\Models\Minute;
use App\Models\Project;
use App\Models\Worker;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

class MeetingFactory extends Factory
{

    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Meeting::class;

    /**
     * Configure the model factory.
     *
     * @return $this
     */
    public function configure()
    {
        return $this->afterCreating(function (Meeting $meeting) {

            $meeting->workers()->attach(Worker::inRandomOrder()->take(5)->get(), ['invited' => true, 'attended' => true]);

            $minute = Minute::create(['order' => 1, 'meeting_id' => $meeting->id, 'parent_id' => null, 'content' => $this->faker->sentence()]);
            $agenda = Agenda::create(['order' => 1, 'meeting_id' => $meeting->id, 'parent_id' => null, 'content' => $this->faker->sentence()]);

        });
    }

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {

        $start_time = Carbon::instance($this->faker->dateTimeBetween('-6 month', '+6 month'));

        return [
            'name' => $this->faker->words(5, true),
            'summary' => $this->faker->text(),
            'purpose' => $this->faker->sentence(),
            'meeting_notes' => $this->faker->text(),
            'start_time' => $start_time,
            'end_time' => $start_time->addHours(2),
            'venue' => 'Room '. $this->faker->randomDigitNotNull(),
            'meeting_type_id' => MeetingType::inRandomOrder()->first(),
            'notes' => $this->faker->text(),
        ];
    }
}
