<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class WorkerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            //
            'forenames' => $this->faker->firstName(),
            'surname' => $this->faker->lastName(),
            'email' => $this->faker->unique()->safeEmail(),
            'title' => $this->faker->jobTitle(),
            'phone' => $this->faker->phoneNumber(),
        ];
    }
}
