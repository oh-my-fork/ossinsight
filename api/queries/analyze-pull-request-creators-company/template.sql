with pr_creator_companies as (
    select
        trim(replace(replace(replace(replace(replace(replace(replace(replace(lower(u.company), ',', ''), '-', ''), '@', ''), 'www.', ''), 'inc', ''), '.com', ''), '.cn', ''), '.', '')) as company_name,
        count(distinct github_events.actor_id) as code_contributors
    from github_events
    left join users u ON github_events.actor_login = u.login
    where repo_id in (41986369) and github_events.type = 'PullRequestEvent' and action = 'opened'
    group by 1
)
select
    *,
    code_contributors / (
        select count(*)
        from pr_creator_companies
        where length(company_name) != 0 and company_name not in ('-', 'none', 'no', 'home', 'n/a', 'null', 'unknown')
    ) as proportion
from pr_creator_companies sub
where length(company_name) != 0 and company_name not in ('-', 'none', 'no', 'home', 'n/a', 'null', 'unknown')
order by code_contributors desc
limit 9999999999;