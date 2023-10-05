# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']


filter_letter_o = 'o'
# Expected output: ['coffee', 'soda water']
filter_letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']


# this is a similar idea just different languages
# const filteredArray = (array, string) => {
# return array.filter((value) => value.includes(string) || value.includes(string.toUpperCase()))
# }


# Pseudo code:
# method name: filtered_word_array
# input: an array of words and a string
# output: an array of the words that met the conditions
# process: create a method with parameters of array and string, then use select method to iterate through the array for the value of the string using .include? method, call on the method and test variables.


def filtered_word_array (array, string) #new method with two parameters
    array.select do |value| # iterates through the array using the select method and looks at the value
    value.include?(string) # checks if the value includes the string
    end
end
p filtered_word_array(beverages_array, filter_letter_o)
p filtered_word_array(beverages_array, filter_letter_t)


# output:
# ["coffee", "soda water"]
# ["tea", "water", "soda water"]


# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'


us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington']


# Pseudo code:
# method name: ordered_array
# input: a hash
# output: an array of all the hash values as seperate values and in alphabetical order
# process: create a method that uses hash as its parameter, then pull the values from the key:value pairs, then use the .flatten method to eliminate the nested arrays and into a new array, then sort it out in alphabetized order, lastly call on the hash and new method.
def ordered_array(hash) # new method that takes in the parameter of hash
    p hash.values.flatten.sort # takes the hash's values puts them in an array of arrays, then uses flatten method to unnest the arrays, then organizes the array in abc order.
end
ordered_array(us_states)


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.


# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'


# Pseudo code:
# class name: Bike
# method name:bike_info
# input: initialized strings and numbers
# output: an string involving the bike information
# process: create a class that initalizes the parameter of model, then create a method for bike_info to create a string interpulated sentence to state the given bike information.
class Bike # create a class called Bike
    def initialize(model) # initializing and creating instance variables
        @model = model
        @wheels = 2
        @current_speed = 0
    end
    def bike_info # new method of bike_info
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph." # prints
    end
    def pedal_faster (faster) # new method takes speed and adds more speed to it
        @current_speed += faster
    end
    def slow_down (brake) # new method takes speed and substacts from it and doesn't allow for negative numbers
        @current_speed -= brake
        if @current_speed.negative?() == true
            @current_speed = 0
        elsif @current_speed.negative?() == false
            @current_speed
        end
    end
end


p trek = Bike.new('trek') # example model to make execution happen
p trek.bike_info


p trek.pedal_faster(10)
p trek.pedal_faster(18)
p trek.slow_down(5)
p trek.slow_down(25)


# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.


# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0


# Pseudo code:
# method name: pedal_faster and brake
# input: a number
# output: a number
# process: create a method for pedal_faster that'll take the current speed and increase it depending on the given value, then create a method for brake that'll take the current speed and subtract the given value of brake from it and if the result ends in a negative it'll be turned into 0.


# def pedal_faster (faster)
# @current_speed += faster
# end
# def slow_down (brake)
# @current_speed -= brake
# if @current_speed.negative?() == true
# @current_speed = 0
# elsif @current_speed.negative?() == false
# @current_speed
# end

# output:
# 23
# 0
