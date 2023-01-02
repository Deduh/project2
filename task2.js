function twoSum(nums, target)
{
    let result
    for (let i = 0, j = 1; i < nums.length - 1, j < nums.length; i++, j++)
    {
        for (let n = j; n < nums.length; n++)
        {
            if (nums[i] + nums[n] === target)
            {
                result = [i, n]
                console.log(result)
            }
        }
    }
    return result
}
twoSum([3, 2, 4], 6)


